const api = require('vactory-gatsby-api');
const chalk = require("chalk");
const fse = require('fs-extra');

exports.onPreBootstrap = async ({store}, pluginOptions) => {
    console.log(chalk.green("[\u2713] Source Webforms"));

    const file = `${__dirname}/.tmp/webforms.json`;
    let data = {
        webforms: []
    };
    let response = [];

    try {
        response = await api.getAll('webform/webform', {
            fields: {
                "webform--webform": "drupal_internal__id,status,langcode,elements"
            }
        });
    } catch (error) {
        console.error(error);
    }

    const flattenItems = [].concat(...response);

    flattenItems.forEach(item => data.webforms.push({
        uuid: item.id,
        id: item.drupal_internal__id,
        isOpen: item.status === 'open',
        locale: item.langcode,
        elements: item.elements
    }));

    try {
        await fse.ensureFile(file);
        await fse.writeJson(file, data);
    } catch (err) {
        console.error(err)
    }
};
