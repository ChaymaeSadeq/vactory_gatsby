const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    
    context.terms = await api.get('taxonomy_term/press_release_theme', taxonomyParams, node.langcode);
    const nodeResponse = await api.getResponse('node/press_release', postsParams, node.langcode);
    context.nodes = nodeResponse.data
    context.pageCount = nodeResponse.meta.count

    return context
};
