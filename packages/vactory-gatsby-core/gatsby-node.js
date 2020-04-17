const api = require('vactory-gatsby-api');

exports.onPreBootstrap = ({cache, actions, emitter, reporter}, pluginOptions) => {
    const apiConfig = pluginOptions.api;

    // Init API.
    api.init(
        apiConfig.url,
        apiConfig.headers,
        apiConfig.languages
    )
};
