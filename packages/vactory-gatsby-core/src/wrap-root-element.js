import React from 'react';
import Api from "vactory-gatsby-api"

export const wrapRootElement = ({element}, pluginOptions) => {
    const apiConfig = pluginOptions.api;

    Api.init(
        apiConfig.url,
        apiConfig.headers,
        apiConfig.languages
    );

    return (
        <div>{element}</div>
    )
};
