const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    context.nodes = await api.get('node/vactory_annual_report', postsParams, node.langcode);
    context.terms = await api.get('taxonomy_term/vactory_ar_thematic', taxonomyParams, node.langcode);
    context.mediatype = await api.get('taxonomy_term/vactory_ar_media_type', taxonomyParams, node.langcode);

    return context
};
