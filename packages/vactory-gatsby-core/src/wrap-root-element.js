import React from 'react';
import Api from "vactory-gatsby-api"
import {AppSettings} from "vactory-gatsby-core"

export const wrapRootElement = ({element, pageContext}, pluginOptions) => {
    const apiConfig = AppSettings.api;
    const lngConfig = AppSettings.languages;

    // Api configuration.
    Api.init(
        apiConfig.url,
        apiConfig.headers,
        lngConfig.availableLanguages
    );

    return (
        <>
            {element}
        </>
    )
};
