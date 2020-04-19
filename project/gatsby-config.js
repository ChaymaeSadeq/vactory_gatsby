module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-core`,
            options: {
                api: {
                    url: "http://vactory-decoupled-project.dd:8083/",
                    // headers: {
                    //     Authorization: 'Basic YXdiOmF3YnZvaWQyMDIw'
                    // },
                },
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
        },
        {
            resolve: `vactory-gatsby-blog`,
        },
    ],
}
