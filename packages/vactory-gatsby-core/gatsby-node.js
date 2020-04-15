const api = require('vactory-gatsby-api')

exports.onPreBootstrap = () => {
    console.log("Create an API instance")
    api.init(
        "https://dam-new.lapreprod.com/backend/",
        {
            Authorization: 'Basic YXdiOmF3YnZvaWQyMDIw'
        },
        ['fr', 'ar']
    )
}
