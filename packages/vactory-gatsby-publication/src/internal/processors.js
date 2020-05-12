const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    context.nodes = await api.get('node/publication', postsParams, node.langcode);
    context.terms = await api.get('taxonomy_term/publication_theme', taxonomyParams, node.langcode);

    return context
};
