import * as baseTruncate from "truncate";
export {default as Head} from './src/components/Head'
export {default as AppSettings} from './.tmp/appConfig'
export {default as ImageStyles} from './.tmp/imageStylesMapping'
export {default as WidgetsMapping} from './.tmp/widgetsMapping'
export {default as WidgetsAmpMapping} from './.tmp/widgetsMapping.amp'
export * from './src/hooks'
export {baseTruncate as truncate}
export {default as stripHtml} from "string-strip-html";
export * from './src/components/auth'
export * from './src/components/StructuredDataSchema'
export {AuthContext} from './src/auth/authProvider'
export {default as i18nInstance} from "./src/i18n/i18nInstance";
export {default as TranslationResources} from "./.tmp/translations.json";
