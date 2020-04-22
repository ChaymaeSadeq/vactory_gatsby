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
    menus: ['main', 'footer'],
    widgets: {
        pathToWidgetsMappingFile: './src/widgets/mapping',
        pathToAMPWidgetsMappingFile: './src/widgets/mapping.amp',
    },
    manifest: {
        name: `Factory`,
        short_name: `Factory`,
        start_url: `/fr`,
        background_color: `#d94f5c`,
        theme_color: `#d94f5c`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
        cache_busting_mode: "none",
    },
    font: {
        // custom: {
        //   families: [
        //     'Roboto:300,400,500',
        //   ],
        //   urls: [
        //     'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
        //   ],
        // },
        google: {
            families: ["Montserrat:100,300,500,700&display=swap"], // https://web.dev/font-display/
        },
        // monotype: {
        //   projectId: "c945a281-e5c1-411f-9a4f-932e18c9b1fb",
        //   version: 12345, // (optional, flushes the CDN cache)
        //   loadAllFonts: true, //(optional, loads all project fonts)
        // },
    },
    progressBar: {
        color: `tomato`,
        showSpinner: false,
    }
}
