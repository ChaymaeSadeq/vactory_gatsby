// const reduxCreateStore = require.resolve(`./src/state/createStore`);

// Config
const path = require('path');
const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;

// @todo: icon.

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-generator`,
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                workboxConfig: {
                    importWorkboxFrom: 'cdn',
                    runtimeCaching: [
                        {
                            // Use cacheFirst since these don't need to be revalidated (same RegExp
                            // and same reason as above)
                            urlPattern: /(\.js$|\.css$|static\/)/,
                            handler: `CacheFirst`,
                        },
                        {
                            // page-data.json files are not content hashed
                            urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
                            handler: `StaleWhileRevalidate`,
                        },
                        {
                            // app-data.json is not content hashed
                            urlPattern: /^https?:.*\/page-data\/app-data\.json/,
                            handler: `StaleWhileRevalidate`,
                        },
                        {
                            // Add runtime caching of various other page resources
                            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                            handler: `StaleWhileRevalidate`,
                        },
                        {
                            // Google Fonts CSS (doesn't end in .css so we need to specify it)
                            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
                            handler: `StaleWhileRevalidate`,
                        },
                        {
                            // HTML Pages
                            urlPattern: /(\/\w+)*\/?$/,
                            handler: `NetworkFirst`,
                            options: {
                                networkTimeoutSeconds: 1,
                            },
                        },
                    ],
                }
            }
        },
        // {
        //     resolve: `gatsby-plugin-react-redux`,
        //     options: {
        //         pathToCreateStoreModule: reduxCreateStore,
        //     },
        // },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: appConfig.progressBar,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: appConfig.manifest,
        },
        `vactory-gatsby-ui`,
        `vactory-gatsby-page`,
        `vactory-gatsby-sitemap`,
    ]
};
