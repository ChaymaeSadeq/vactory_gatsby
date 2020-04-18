import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"
import TranslationResources from "../../.tmp/translations"
import pluginOptions from "../../.tmp/pluginOptions"

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: TranslationResources.resources,
        fallbackLng: pluginOptions.languages.defaultLanguage,
        whitelist: pluginOptions.languages.availableLanguages,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        },
        detection: {
            order: ["path", "querystring", "navigator", "htmlTag"],
            lookupFromPathIndex: 0,
            checkWhitelist: true,
            lookupQuerystring: "_lng",
        },
    })

export default i18n
