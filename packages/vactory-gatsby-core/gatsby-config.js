// @todo:  Load override file in here from project.
// @todo: override manifest & font loader, nprogress.
// @todo: merge config & defaults.
const manifestIcon = require.resolve(`./src/images/factory-logo.png`);
const reduxCreateStore = require.resolve(`./src/state/createStore`);

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
            options: {
                color: `tomato`,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Factory`,
                short_name: `Factory`,
                start_url: `/fr`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: manifestIcon,
                cache_busting_mode: "none",
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            // https://github.com/typekit/webfontloader/issues/409
            options: {
                // custom: {
                //   families: [
                //     'Roboto:300,400,500',
                //   ],
                //   urls: [
                //     'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
                //   ],
                // },
                google: {
                    families: ["Montserrat:100,300,500,700&display=swap"], // https://web.dev/font-display/
                },
                // monotype: {
                //   projectId: "c945a281-e5c1-411f-9a4f-932e18c9b1fb",
                //   version: 12345, // (optional, flushes the CDN cache)
                //   loadAllFonts: true, //(optional, loads all project fonts)
                // },
            },
        },
        `vactory-gatsby-ui`,
    ]
};
