import React from 'react'
import {renderToString} from "react-dom/server";
import {I18nextProvider} from "react-i18next"
import i18n from './src/i18n/i18nInstance'
import {getLanguageByPathname} from './src/utils/language'

export {wrapRootElement} from './src/wrap-root-element';
export const replaceRenderer = ({bodyComponent, replaceBodyHTMLString, pathname}) => {
    const lngCode = getLanguageByPathname(pathname);
    const i18nClone = i18n.cloneInstance({
        lng: lngCode,
        fallbackLng: lngCode
    });
    const ConnectedBody = () => (
        <I18nextProvider i18n={i18nClone}>
            {bodyComponent}
        </I18nextProvider>
    );
    replaceBodyHTMLString(renderToString(<ConnectedBody/>))
};
