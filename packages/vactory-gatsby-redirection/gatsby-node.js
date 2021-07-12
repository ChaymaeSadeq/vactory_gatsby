const api = require('vactory-gatsby-api');
const fse = require('fs-extra');
const path = require('path');
const chalk = require("chalk");


exports.onPreBootstrap = async ({ store }, pluginOptions) => {
    // Get redirections.
    const results = await api.getRest('redirections', {}, false);
    // console.log('***************_______________************____________');
    // console.log(results.data.data);
    // console.log('***************_______________************____________');
    // create tmp Save redirections
    const redirectionFile = `${__dirname}/.tmp/redirection.json`;
    try {
        await fse.ensureFile(redirectionFile);
        await fse.writeJson(redirectionFile, results.data.data);
    } catch (err) {
        console.error(err)
    }
};
//add redirections to .htaccess
exports.onPostBuild = async ({ store }) => {
    //Get the json content
    // console.log('**______________________POSTBUILD____________________**');
    const redirectionsFile = `${__dirname}/.tmp/redirection.json`;
    const contentReadFile = await fse.readJson(redirectionsFile)
    // console.log(contentReadFile)

    //loop on json
    let rules ='#rules';
    for (let i = 0; i < contentReadFile.length; i++) {
        switch (contentReadFile[i]['status']) {
            case "301":
                rules += '\n\tRedirect permanent \"' + contentReadFile[i]['old'] + '\"    \"' + contentReadFile[i]['new'] + '\"';
                break;
                case "302":
                rules += '\n\tRedirect temp \"' + contentReadFile[i]['old'] + '\"    \"' + contentReadFile[i]['new'] + '\"';
                break;
                case "303":
                rules += '\n\tRedirect seeother \"' + contentReadFile[i]['old'] + '\"    \"' + contentReadFile[i]['new'] + '\"';
                break;
            case "410":
                rules += '\n\tRedirect  \"' + contentReadFile[i]['old'] + '\"    \"' + contentReadFile[i]['new'] + '\"';
                break;
        }
    }

    //Rules tag
    tag =  `<IfModule mod_rewrite.c>
        ${rules}
        </IfModule>`
        console.log(tag);

    //insert in .htaccess
    const htaccess = `${__dirname}/../../projects/vactory/static/.htaccess`;
    const htaccessContent = await fse.readFile(htaccess, 'utf8');
    // console.log(htaccessContent);
    const newhtaccess=htaccessContent.replace('### CUSTOM-RULES ###', tag);
    fse.writeFileSync(htaccess, newhtaccess);
    // console.log(newhtaccess);

};