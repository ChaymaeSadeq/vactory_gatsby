const chalk = require("chalk")
const path = require("path")
const fs = require("fs")
const Axios = require('axios')
const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;
const fse = require('fs-extra');

// @todo: pagination.

exports.onPostBootstrap = async () => {
    const backendURL = appConfig.api.url;
    const frontendURL = appConfig.frontendURL;
    const sitemapURL = `${backendURL}sitemap.xml`;
    const sitemapXslURL = `${backendURL}sitemap.xsl`;
    const publicPath = `./public`;
    const output = "/sitemap.xml";
    const outputXSL = "/sitemap.xsl";
    const saved = path.join(publicPath, output);
    const savedXSL = path.join(publicPath, outputXSL);

    try {
        // Sitemap.xml
        const response = await Axios({
            url: sitemapURL,
            method: 'GET',
        });
        const data = response.data.split(backendURL).join(frontendURL);

        // Sitemap.xsl
        const xslResponse = await Axios({
            url: sitemapXslURL,
            method: 'GET',
        });

        // Save file.
        fse.ensureFileSync(saved);
        fse.ensureFileSync(savedXSL);
        fse.writeFileSync(saved, data);
        fse.writeFileSync(savedXSL, xslResponse.data);
        console.log(chalk.green(`[\u25E6] Generate sitemap : Success`));

    } catch (err) {
        console.log(chalk.red(`[\u25E6] Generate sitemap : Failed > See if "${sitemapURL}" is working for you`));
    }

};
