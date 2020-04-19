import React from 'react';
import Api from "vactory-gatsby-api"
import {I18nextProvider} from 'react-i18next';
import i18nInstance from './i18n/i18nInstance';
import {AppSettings} from "vactory-gatsby-core"

export const wrapRootElement = ({element}, pluginOptions) => {
    const apiConfig = AppSettings.api;
    const lngConfig = AppSettings.languages;

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
