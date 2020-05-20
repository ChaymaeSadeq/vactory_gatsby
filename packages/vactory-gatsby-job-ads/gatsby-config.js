const esmRequire = require("esm")(module);
const path = require('path');
const fs = require('fs');

// Templates.
const PostTemplate = require.resolve(`./src/components/post.container`);
const PostAmpTemplate = require.resolve(`./src/components/post.amp.container`);
const PostApplyFormTemplate = require.resolve(`./src/components/post.applyForm.container`);
const PostApplyFormAmpTemplate = require.resolve(`./src/components/post.applyForm.amp.container`);
const PostsTemplate = require.resolve(`./src/components/posts.container`);
const PostsAmpTemplate = require.resolve(`./src/components/posts.amp.container`);

// Processors
const customProcessors = path.join(process.cwd(), "src/vactory-gatsby-job-ads/internal/processors.js");
const processors = fs.existsSync(customProcessors) ? esmRequire(customProcessors) : esmRequire("./src/internal/processors.js");

// AMP settings
const customAmpSettings = path.join(process.cwd(), "src/vactory-gatsby-job-ads/internal/amp.js");
const ampSettings = fs.existsSync(customAmpSettings) ? esmRequire(customAmpSettings) : esmRequire("./src/internal/amp.js");

// API Post params
const customPostParams = path.join(process.cwd(), "src/vactory-gatsby-job-ads/internal/api.post.params.js");
const postParams = fs.existsSync(customPostParams) ? esmRequire(customPostParams) : esmRequire("./src/internal/api.post.params.js");

// API Posts params
const customPostsParams = path.join(process.cwd(), "src/vactory-gatsby-job-ads/internal/api.posts.params.js");
const postsParams = fs.existsSync(customPostsParams) ? esmRequire(customPostsParams) : esmRequire("./src/internal/api.posts.params.js");

// API Taxonomy params
const customTaxonomyParams = path.join(process.cwd(), "src/vactory-gatsby-job-ads/internal/api.postTaxonomy.params.js");
const taxonomyParams = fs.existsSync(customTaxonomyParams) ? esmRequire(customTaxonomyParams) : esmRequire("./src/internal/api.postTaxonomy.params.js");

module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Job Ads",
                template: PostTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostAmpTemplate
                },
                resource: "node/job_ads",
                params: postParams.params,
            },
        },
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Job Ads Forms",
                template: PostApplyFormTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostApplyFormAmpTemplate
                },
                resource: "node/job_ads",
                params: postParams.params,
                nodeProcessor: (node) => {
                    node.path.alias = node.path.alias + '/form'
                    return node
                },
            },
        },
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Job Ads Listing",
                template: PostsTemplate,
                amp: {
                    enabled: ampSettings.enabled,
                    template: PostsAmpTemplate
                },
                resource: "node/vactory_page_listing",
                params: {
                    filter: {
                        field_view_id: 'job_ads'
                    }
                },
                addContext: (node) => processors.addContext(node, postsParams.params, taxonomyParams.params),
            },
        }
    ]
};
