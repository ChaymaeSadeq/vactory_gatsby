const path = require("path");


exports.createPages = async ({store, actions: {createPage}}) => {
    const homeTemplate = path.resolve(__dirname, `src/templates/home.js`);
    
    createPage({
        path: "/home",
        component: homeTemplate,
        context: {
            title: 'hello',
            node: {},
            breadcrumb: {},
            pageInfo: {},
        },
    });

};