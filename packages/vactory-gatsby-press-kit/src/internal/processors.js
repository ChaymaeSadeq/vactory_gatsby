const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    context.nodes = await api.get('node/press_kit', postsParams, node.langcode);
    context.terms = await api.get('taxonomy_term/press_kit_theme', taxonomyParams, node.langcode);

    return context
};
