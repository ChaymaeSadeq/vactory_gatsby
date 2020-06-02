const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
     let context = {};

    const nodeResponse = await api.getResponse('node/publication', postsParams, node.langcode); 
    context.terms = await api.get('taxonomy_term/publication_theme', taxonomyParams, node.langcode);
    context.nodes = nodeResponse.data
    context.pageCount = nodeResponse.meta.count
    return context
};
