const path = require("path");


exports.createPages = async ({store, actions: {createPage}}) => {
    const homeTemplate = path.resolve(__dirname, `src/templates/home.js`);
    const defaultTemplate = path.resolve(__dirname, 'src/templates/default.js');
    
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

    createPage({
        path: "/produits-services",
        component: defaultTemplate,
        context: {
            title: 'Produits & Services',
            node: {},
            breadcrumb: [{link: '/', text: 'Accueil'}, {link: '/', text: 'Produits & Services'}],
            banner_image: 'https://capital-azur.com/sites/default/files/2020-05/banner-cp-2.png',
        },
    });

};