import React, {Suspense} from 'react';
import {action} from "@storybook/addon-actions"
import {ThemeProvider} from 'styled-components'
import {I18nextProvider} from "react-i18next"
import {AppSettings, i18nInstance} from 'vactory-gatsby-core';
import {addDecorator} from '@storybook/react';
import {
    theme as vactoryTheme,
    GlobalStyle,
    mergeIcons,
    iconSet,
    VactoryIconProvider,
    DirectionManager
} from 'vactory-ui';

import deepmerge from 'deepmerge';
import VactoryGlobaltStyle from '../src/vactory-gatsby-ui/GlobalStyle'
import {theme as UiTheme} from '../src/vactory-gatsby-ui/theme'
import customIconSet from '../src/vactory-gatsby-ui/custom-icons';
import Api from "vactory-gatsby-api";

const theme = deepmerge.all([vactoryTheme, UiTheme]);
theme.breakpoints = vactoryTheme.breakpoints;
const customIcons = mergeIcons(iconSet, customIconSet);

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: { expanded: true },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
    enqueue: () => {
    },
    hovering: () => {
    },
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
};

// Used to detect storybook.
global.__IS_STORYBOOK__ = true;


const pageContext = {
    node: {
        langcode: 'fr',
        metatag_normalized: '',
    }
};

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'fr',
        toolbar: {
            icon: 'globe',
            items: [
                // {value: 'en', right: '🇺🇸', title: 'English'},
                {value: 'fr', right: '🇫🇷', title: 'Français'},
                {value: 'ar', right: '🇲🇦', title: 'Arabic'},
            ],
        },
    },
};

addDecorator((storyFn, context) => {
    const lng = context.globals.locale;
    const dir = lng === 'ar' ? 'rtl' : 'ltr';

    const apiConfig = AppSettings.api;
    const lngConfig = AppSettings.languages;

    // Api configuration.
    Api.init(
        apiConfig.url,
        apiConfig.headers,
        lngConfig.availableLanguages
    );

    React.useEffect(() => {
        i18nInstance.changeLanguage(lng)
    }, [lng]);

    return (<Suspense fallback="loading">
        <I18nextProvider i18n={i18nInstance}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <VactoryGlobaltStyle/>
                <VactoryIconProvider value={customIcons}>
                    <DirectionManager dir={dir}>
                        {storyFn()}
                    </DirectionManager>
                </VactoryIconProvider>
            </ThemeProvider>
        </I18nextProvider>
    </Suspense>)
});
