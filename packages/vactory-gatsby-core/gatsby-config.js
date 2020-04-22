const reduxCreateStore = require.resolve(`./src/state/createStore`);

// Config
const path = require('path');
const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;

// @todo: icon.

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-generator`,
        `gatsby-plugin-styled-components`,
        // {
        //     resolve: `gatsby-plugin-offline`,
        // },
        {
            resolve: `gatsby-plugin-react-redux`,
            options: {
                pathToCreateStoreModule: reduxCreateStore,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: appConfig.progressBar,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: appConfig.manifest,
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            // https://github.com/typekit/webfontloader/issues/409
            options: appConfig.font,
        },
        `vactory-gatsby-ui`,
        `vactory-gatsby-page`,
    ]
};
