const chalk = require("chalk");
const glob = require("glob");
const path = require('path');
const fse = require('fs-extra');
const babel = require("@babel/core");
const parser = require('@babel/parser').parse;
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require("@babel/types");
const fixture = require('./fixtures/dynamic-filed.code');

// @todo: check if extension enabled.
exports.generateCombinedFile = (lookupMappingFile, fileToSave) => {
    console.log(chalk.green("[\u2713] Generate Dynamic Field Mapping File"));

    let lastImport;
    let widgetProperties;
    const projectFolder = path.resolve(process.cwd());
    const packagesFolder = `${path.resolve(process.cwd(), '../..')}/packages`;
    const combinedAst = parser(fixture.fixtureCode, {sourceType: 'module'});

    // Get last import statement and widgets object.
    traverse(combinedAst, {
        ImportDeclaration(path) {
            lastImport = path
        },
        VariableDeclaration(path) {
            widgetProperties = path.get('declarations').find(d => d.node.id.name === 'widgets').node.init.properties
        }
    });

    // Scan for widgets.mapping.js
    const packagesFiles = glob.sync(`**/${lookupMappingFile}`, {
        cwd: packagesFolder,
        absolute: true,
        nodir: true
    });

    const projectFile = glob.sync(`**/${lookupMappingFile}`, {
        cwd: projectFolder,
        absolute: true,
        nodir: true
    });

    // Add project widgets.mapping.js as a last item in order to allow override.s
    const files = packagesFiles.concat(projectFile);

    // Combine imports & widgets.
    files.forEach(filepath => {
        console.log(chalk.blue(`[\u25E6] Parsing: ${filepath}`));
        const file = babel.transformFileSync(filepath, {ast: true});
        traverse(file.ast, {
            ImportDeclaration(path) {
                lastImport.insertBefore(path.node);
            },
            VariableDeclaration(path) {
                const properties = path.get('declarations').find(d => d.node.id.name === 'widgets').node.init.properties
                properties.forEach(prop => widgetProperties.push(prop));
            }
        });
    });

    // Remove fake import > import {Fake} from "Fake".
    lastImport.remove();

    // Generate code.
    const newCode = generate(combinedAst).code;

    // Save file.
    try {
        fse.ensureFileSync(fileToSave);
        fse.writeFileSync(fileToSave, newCode);
    } catch (err) {
        console.error(err)
    }
};
