const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    context.nodes = await api.get('node/blog', postsParams, node.langcode);
    context.terms = await api.get('taxonomy_term/blog_category', taxonomyParams, node.langcode);

    return context
};
