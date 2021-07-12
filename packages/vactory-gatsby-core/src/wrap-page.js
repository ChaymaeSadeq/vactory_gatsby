import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18nInstance from './i18n/i18nInstance';
import { PageContext } from './context/page-context';

export const wrapPageElement = ({element, props}, pluginOptions) => {
    const PageContextData={
        params:props.params || {},
        nid:props?.pageContext?.node.drupal_internal__nid || false,
    }
    return (
        <I18nextProvider i18n={i18nInstance}>
            <PageContext.Provider value={PageContextData}>
            {element}
            </PageContext.Provider>
        </I18nextProvider>
    )
};
