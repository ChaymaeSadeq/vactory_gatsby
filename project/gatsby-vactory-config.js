export default {
    api: {
        url: process.env.GATSBY_API_URL,
        headers: {
            Authorization: process.env.GATSBY_API_AUTHORIZATION
        },
    },
    frontendURL: process.env.GATSBY_FRONTEND_URL,
    languages: {
        defaultLanguage: 'fr',
        availableLanguages: ['fr', 'ar'],
        languageLabels: [
            {code: "fr", label: "Français"},
            {code: "ar", label: "العربية"},
        ],
    },
    widgets: {
        pathToWidgetsMappingFile: './src/widgets/mapping',
        pathToAMPWidgetsMappingFile: './src/widgets/mapping.amp',
    }
}
