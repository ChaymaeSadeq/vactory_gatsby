const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};
    const nodeResponse = await api.getResponse('node/glossary', postsParams, node.langcode);
    console.log(nodeResponse)
    context.nodes = nodeResponse.data
    //context.terms = await api.get('taxonomy_term/glossary_secteur', taxonomyParams, node.langcode);
    return context
};
