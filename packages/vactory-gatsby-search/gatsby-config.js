// Templates.
const SearchTemplate = require.resolve(`./src/components/search.container`);

module.exports = {
    plugins: [
        {
            resolve: `vactory-gatsby-nodes`,
            options: {
                title: "Source Search Listing",
                template: SearchTemplate,
                amp: {
                    enabled: false,
                    template: null
                },
                resource: "node/vactory_page_listing",
                params: {
                    filter: {
                        field_view_id: 'search'
                    }
                },
            },
        }
    ]
};
