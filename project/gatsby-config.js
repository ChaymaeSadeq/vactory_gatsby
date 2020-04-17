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
                    languages: ['fr', 'ar']
                }
            }
        },
        {
            resolve: `vactory-gatsby-blog`,
        }
    ],
}
