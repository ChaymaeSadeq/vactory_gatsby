import React from 'react';
import Api from "vactory-gatsby-api"
import {I18nextProvider} from 'react-i18next';
import i18nInstance from './i18n/i18nInstance';

export const wrapRootElement = ({element}, pluginOptions) => {
    const apiConfig = pluginOptions.api;
    const lngConfig = pluginOptions.languages;

    // Api configuration.
    Api.init(
        apiConfig.url,
        apiConfig.headers,
        lngConfig.availableLanguages
    );

    return (
        <I18nextProvider i18n={i18nInstance}>
            {element}
        </I18nextProvider>
    )
};
