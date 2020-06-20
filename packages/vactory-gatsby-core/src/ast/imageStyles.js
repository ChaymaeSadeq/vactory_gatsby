const chalk = require("chalk");
const glob = require("glob");
const path = require('path');
const fse = require('fs-extra');
const babel = require("@babel/core");
const parser = require('@babel/parser').parse;
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require("@babel/types");
const fixture = require('./fixtures/image-styles.code');

// @todo: check if extension enabled.
exports.generateCombinedFile = (lookupMappingFile, fileToSave) => {
    console.log(chalk.green("[\u2713] Generate Image Styles Mapping file"));

    let widgetProperties;
    const projectFolder = path.resolve(process.cwd());
    const packagesFolder = `${path.resolve(process.cwd(), '../..')}/packages`;
    const combinedAst = parser(fixture.fixtureCode, {sourceType: 'module'});

    // Get imageStyle object.
    traverse(combinedAst, {
        VariableDeclaration(path) {
            widgetProperties = path.get('declarations').find(d => d.node.id.name === 'imageStyles').node.init.elements
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
            VariableDeclaration(path) {
                const properties = path.get('declarations').find(d => d.node.id.name === 'imageStyles').node.init.elements
                properties.forEach(prop => widgetProperties.push(prop));
            }
        });
    });

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
