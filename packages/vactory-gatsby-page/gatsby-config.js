const esmRequire = require("esm")(module);
const path = require('path');
const fs = require('fs');

// Templates.
const PageTemplate = require.resolve(`./src/components/page.container`);
const PageAmpTemplate = require.resolve(`./src/components/page.amp.container`);

// AMP settings
const customAmpSettings = path.join(process.cwd(), "src/vactory-gatsby-page/internal/amp.js");
const ampSettings = fs.existsSync(customAmpSettings) ? esmRequire(customAmpSettings) : esmRequire("./src/internal/amp.js");

// API Page params
const customPageParams = path.join(process.cwd(), "src/vactory-gatsby-page/internal/api.page.params.js");
const pageParams = fs.existsSync(customPageParams) ? esmRequire(customPageParams) : esmRequire("./src/internal/api.page.params.js");

module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Page",
                template: PageTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PageAmpTemplate
                },
                resource: "node/vactory_page",
                params: pageParams.params,
            },
        }
    ]
};
