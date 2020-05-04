const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    context.nodes = await api.get('node/events', postsParams, node.langcode);
    context.terms = await api.get('taxonomy_term/events_category', taxonomyParams, node.langcode);
    context.cities = await api.get('taxonomy_term/events_cities', taxonomyParams, node.langcode);
    return context
};
