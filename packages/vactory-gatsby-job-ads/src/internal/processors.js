const api = require('vactory-gatsby-api');

exports.nodeProcessor = async (node) => {
    return node
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
    let context = {};

    context.nodes = await api.get('node/job_ads', postsParams, node.langcode);
    context.cities = await api.get('taxonomy_term/job_ads_city', taxonomyParams, node.langcode);
    context.contracts = await api.get('taxonomy_term/job_ads_contract', taxonomyParams, node.langcode);
    context.professions = await api.get('taxonomy_term/job_ads_profession', taxonomyParams, node.langcode);
    return context
};
