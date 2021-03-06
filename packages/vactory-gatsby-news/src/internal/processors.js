const api = require("vactory-gatsby-api");
exports.nodeProcessor = async (node) => {
  return node;
};

exports.addContext = async (node, postsParams, taxonomyParams) => {
  let context = {};

  nodeResponse = await api.getResponse(
    "node/vactory_news",
    postsParams,
    node.langcode
  );
  context.nodes = nodeResponse.data;
  context.pageCount = nodeResponse.meta.count;
  context.terms = await api.get(
    "taxonomy_term/vactory_news_theme",
    taxonomyParams,
    node.langcode
  );

  return context;
};
