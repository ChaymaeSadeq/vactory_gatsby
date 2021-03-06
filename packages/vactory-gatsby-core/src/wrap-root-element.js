import React from 'react';
import Api from "vactory-gatsby-api"
import {AppSettings} from "vactory-gatsby-core"
import { AuthProvider } from "./auth/authProvider";
import AuthService from "./auth/authService"

export const wrapRootElement = ({element, pageContext}, pluginOptions) => {
    const authService = new AuthService();
    const apiConfig = AppSettings.api;
    const lngConfig = AppSettings.languages;

    // Api configuration.
    Api.init(
        apiConfig.url,
        apiConfig.headers,
        lngConfig.availableLanguages
    );

    if (typeof AppSettings.enableAuth === 'undefined' || !AppSettings.enableAuth) {
        return (
            <>
                {element}
            </>
        )
    }

    return (
        <AuthProvider authService={authService}>
            {element}
        </AuthProvider>
    )
};
