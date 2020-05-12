const esmRequire = require("esm")(module);
const path = require('path');
const fs = require('fs');

// Templates.
const PostTemplate = require.resolve(`./src/components/post.container`);
const PostAmpTemplate = require.resolve(`./src/components/post.amp.container`);
const PostsTemplate = require.resolve(`./src/components/posts.container`);
const PostsAmpTemplate = require.resolve(`./src/components/posts.amp.container`);

// Processors
const customProcessors = path.join(process.cwd(), "src/vactory-gatsby-events/internal/processors.js");
const processors = fs.existsSync(customProcessors) ? esmRequire(customProcessors) : esmRequire("./src/internal/processors.js");

// AMP settings
const customAmpSettings = path.join(process.cwd(), "src/vactory-gatsby-events/internal/amp.js");
const ampSettings = fs.existsSync(customAmpSettings) ? esmRequire(customAmpSettings) : esmRequire("./src/internal/amp.js");

// API Post params
const customPostParams = path.join(process.cwd(), "src/vactory-gatsby-events/internal/api.post.params.js");
const postParams = fs.existsSync(customPostParams) ? esmRequire(customPostParams) : esmRequire("./src/internal/api.post.params.js");

// API Posts params
const customPostsParams = path.join(process.cwd(), "src/vactory-gatsby-events/internal/api.posts.params.js");
const postsParams = fs.existsSync(customPostsParams) ? esmRequire(customPostsParams) : esmRequire("./src/internal/api.posts.params.js");

// API Taxonomy params
const customTaxonomyParams = path.join(process.cwd(), "src/vactory-gatsby-events/internal/api.postTaxonomy.params.js");
const taxonomyParams = fs.existsSync(customTaxonomyParams) ? esmRequire(customTaxonomyParams) : esmRequire("./src/internal/api.postTaxonomy.params.js");

module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Events",
                template: PostTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostAmpTemplate
                },
                resource: "node/events",
                params: postParams.params,
            },
        },
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Events Listing",
                template: PostsTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostsAmpTemplate
                },
                resource: "node/vactory_page_listing",
                params: {
                    filter: {
                        field_view_id: 'events'
                    }
                },
                addContext: (node) => processors.addContext(node, postsParams.params, taxonomyParams.params),
            },
        }
    ]
};
