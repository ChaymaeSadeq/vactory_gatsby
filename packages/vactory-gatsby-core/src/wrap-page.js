import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18nInstance from './i18n/i18nInstance';

export const wrapPageElement = ({element, pageContext}, pluginOptions) => {
    return (
        <I18nextProvider i18n={i18nInstance}>
            {element}
        </I18nextProvider>
    )
};
