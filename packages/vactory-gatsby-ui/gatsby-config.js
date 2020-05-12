// Config
const path = require('path');
const esmRequire = require('esm')(module);
const appConfig = esmRequire(path.join(process.cwd(), "gatsby-vactory-config.js")).default;

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-web-font-loader",
            // https://github.com/typekit/webfontloader/issues/409
            options: appConfig.font,
        }
    ]
};
