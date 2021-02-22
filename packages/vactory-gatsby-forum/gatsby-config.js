const esmRequire = require("esm")(module);
const path = require('path');
const fs = require('fs');

// Templates.
const PostTemplate = require.resolve(`./src/components/post.container`);
const PostAmpTemplate = require.resolve(`./src/components/post.amp.container`);
const ForumSearchTemplate = require.resolve(`./src/components/search.container`);

// AMP settings
const customAmpSettings = path.join(process.cwd(), "src/vactory-gatsby-forum/internal/amp.js");
const ampSettings = fs.existsSync(customAmpSettings) ? esmRequire(customAmpSettings) : esmRequire("./src/internal/amp.js");

// API Post params
const customPostParams = path.join(process.cwd(), "src/vactory-gatsby-forum/internal/api.post.params.js");
const postParams = fs.existsSync(customPostParams) ? esmRequire(customPostParams) : esmRequire("./src/internal/api.post.params.js");

module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Forum",
                template: PostTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostAmpTemplate
                },
                resource: "node/vactory_forum",
                params: postParams.params,
            },
        },
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Forum Search Listing",
                template: ForumSearchTemplate,
                amp: {
                    enabled: false,
                    template: null
                },
                resource: "node/vactory_page_listing",
                params: {
                    filter: {
                        field_view_id: 'forum_search'
                    }
                },
            },
        }
    ]
};
