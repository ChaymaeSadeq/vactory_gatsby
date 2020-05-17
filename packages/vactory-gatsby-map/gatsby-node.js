const api = require('vactory-gatsby-api');
const chalk = require("chalk");
const path = require("path");
const fse = require("fs-extra");

const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;

const publicPath = `./public`;
const output = "/locator-map.json";

exports.onPreBootstrap = async () => {
    const saved = path.join(publicPath, output);

    let items = [];
    try {
        // items = await api.getAll('locator_entity/vactory_locator', {}, appConfig.languages.defaultLanguage);
        items = await api.get('locator_entity/vactory_locator', {
            fields: {
                "locator_entity--vactory_locator": "drupal_internal__id,name,field_locator_adress,field_locator_fax,field_locator_info,field_locator_phone,field_locator_phone_2",
            }
        }, appConfig.languages.defaultLanguage);
    } catch (error) {
        console.error(error);
        return;
    }

    console.log(chalk.bold.white.bgBlue(`[\u2713] Generate locator-map.json > ${items.length} items`));

    try {
        await fse.writeJson(saved, {items: items});
    } catch (err) {
        if (err) throw err;
    }

};

