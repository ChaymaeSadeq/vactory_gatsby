const esmRequire = require("esm")(module);
const path = require('path');
const fs = require('fs');

// Templates.
const PostTemplate = require.resolve(`./src/components/post.container`);
const PostAmpTemplate = require.resolve(`./src/components/post.amp.container`);
const PostApplyFormTemplate = require.resolve(`./src/components/post.applyForm.container`);
const PostApplyFormAmpTemplate = require.resolve(`./src/components/post.applyForm.amp.container`);

// AMP settings
const customAmpSettings = path.join(process.cwd(), "src/vactory-gatsby-tender/internal/amp.js");
const ampSettings = fs.existsSync(customAmpSettings) ? esmRequire(customAmpSettings) : esmRequire("./src/internal/amp.js");

// API Post params
const customPostParams = path.join(process.cwd(), "src/vactory-gatsby-tender/internal/api.post.params.js");
const postParams = fs.existsSync(customPostParams) ? esmRequire(customPostParams) : esmRequire("./src/internal/api.post.params.js");


module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Tender",
                template: PostTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostAmpTemplate
                },
                resource: "node/tender",
                params: postParams.params,
            },
        },
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Tender Forms",
                template: PostApplyFormTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostApplyFormAmpTemplate
                },
                resource: "node/tender",
                params: postParams.params,
                nodeProcessor: (node) => {
                    node.path.alias = node.path.alias + '/form'
                    return node
                },
            },
        }
    ]
};
