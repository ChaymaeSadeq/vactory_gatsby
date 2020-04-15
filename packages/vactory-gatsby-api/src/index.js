const Kitsu = require("kitsu");
const https = require("https");
const lodashGet = require("lodash.get");

var Api = {
    kitsu: null,
    baseURL: '',
    languages: []
};

/**
 *
 * @param model
 * @param params
 * @returns {Promise<[]>}
 */
Api.getAllResources = async (model, params = {}) => {
    if (!Api.kitsu) {
        throw "API has not been initialized. call init()";
    }

    const getData = async (items = [], rs, parameters = {}) => {
        const {data, links} = await Api.kitsu.get(rs, parameters);
        const next_url = lodashGet(links, "next.href");

        items = items.concat(data);
        if (next_url) {
            const url_parts = url.parse(next_url, true);
            const offset = url_parts.query["page[offset]"];
            const limit = url_parts.query["page[limit]"];

            parameters.page = {
                "offset": offset,
                "limit": limit,
            };

            return getData(items, rs, parameters)
        }

        return items
    };

    // Make a call.
    const originalBaseURL = Api.kitsu.axios.defaults.baseURL;
    const response = await Promise.all(Api.languages.map(async lang => {
        Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
        return await getData([], model, params)
    }));

    // Restore baseURL.
    Api.kitsu.axios.defaults.baseURL = originalBaseURL;

    return response
};

/**
 *
 * @param model
 * @param params
 * @param lang
 * @returns {Promise<[]>}
 */
Api.getResources = async (model, params = {}, lang = null) => {
    if (!Api.kitsu) {
        throw "API has not been initialized. call init()";
    }

    // Make a call.
    let response = null;
    const originalBaseURL = Api.kitsu.axios.defaults.baseURL;

    if (lang) {
        Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
        response = await Api.kitsu.get(model, params)
    } else {
        response = await Promise.all(Api.languages.map(async lang => {
            Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
            return await Api.kitsu.get(model, params)
        }));
    }

    // Restore baseURL.
    Api.kitsu.axios.defaults.baseURL = originalBaseURL;

    return response
};

/**
 * Init API
 *
 * @param {string} baseURL Backend URL
 * @param {Object} headers Additional headers to send with request
 * @param {Array} languages Languages supported by the backend
 * @returns null
 */
Api.init = async (baseURL, headers = {}, languages = []) => {
    Api.initialized = true;
    Api.baseURL = baseURL;
    Api.languages = languages;

    Api.kitsu = new Kitsu({
        baseURL: baseURL,
        camelCaseTypes: false,
        resourceCase: "none",
        pluralize: false,
        axiosOptions: {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
            headers: headers
        },
        headers: headers
    })
};

export default Api
