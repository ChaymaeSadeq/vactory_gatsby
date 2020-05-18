const Kitsu = require("kitsu");
const https = require("https");
const lodashGet = require("lodash.get");
const url = require('url');

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
Api.getAll = async (model, params = {}, lang = null) => {
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
    let response = null;
    const originalBaseURL = Api.kitsu.axios.defaults.baseURL;

    if (lang) {
        Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
        response = await getData([], model, params)
    } else {
        response = await Promise.all(Api.languages.map(async lang => {
            Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
            return await getData([], model, params)
        }));
    }
    //
    // const response = await Promise.all(Api.languages.map(async lang => {
    //     Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
    //     return await getData([], model, params)
    // }));

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
Api.get = async (model, params = {}, lang = null) => {
    if (!Api.kitsu) {
        throw "API has not been initialized. call init()";
    }

    // Make a call.
    let response = null;
    const originalBaseURL = Api.kitsu.axios.defaults.baseURL;

    if (lang) {
        Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
        const {data} = await Api.kitsu.get(model, params);
        response = data
    } else {
        response = await Promise.all(Api.languages.map(async lang => {
            Api.kitsu.axios.defaults.baseURL = `${Api.baseURL}${lang}/api/`;
            const {data} = await Api.kitsu.get(model, params);
            return data
        }));
    }

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
Api.getRest = async (model, params = {}, lang = null) => {
    if (!Api.kitsu) {
        throw "API has not been initialized. call init()";
    }

    // Without language prefix.
    if (typeof lang === 'boolean') {
        return await Api.kitsu.axios.get(`${Api.baseURL}${model}`, params);
    } else if (typeof lang === 'string') {  // With language prefix.
        return await Api.kitsu.axios.get(`${Api.baseURL}${lang}/${model}`, params);
    }

    // Multi language by default.
    return await Promise.all(Api.languages.map(async lang => {
        const response = await Api.kitsu.axios.get(`${Api.baseURL}${lang}/${model}`, params);
        return {
            locale: lang,
            response
        }
    }));
};

/**
 *
 * @param model
 * @param params
 * @param lang
 * @param headers
 * @returns {Promise<[]>}
 */
Api.postRest = async (model, params = {}, lang = null, headers = {}) => {
    if (!Api.kitsu) {
        throw "API has not been initialized. call init()";
    }

    // Without language prefix.
    if (typeof lang === 'boolean') {
        return Api.kitsu.axios.post(`${Api.baseURL}${model}`, params, headers);
    } else if (typeof lang === 'string') {  // With language prefix.
        return Api.kitsu.axios.post(`${Api.baseURL}${lang}/${model}`, params, headers);
    }

    // Multi language by default.
    return Promise.all(Api.languages.map(async lang => {
        const response = Api.kitsu.axios.post(`${Api.baseURL}${lang}/${model}`, params, headers);
        return {
            locale: lang,
            response
        }
    }));
};


/**
 * Init API
 *
 * @param {string} baseURL Backend URL
 * @param {Object} headers Additional headers to send with request
 * @param {Array} languages Languages supported by the backend
 * @returns null
 */
Api.init = (baseURL, headers = {}, languages = []) => {
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

/**
 * Enable debug.
 */
Api.enableDebug = () => {
    Api.kitsu.axios.interceptors.request.use(config => {
        console.log(config);
        // Do something before request is sent
        return config
    }, error => {
        // Do something with request error
        return Promise.reject(error)
    })
};

export default Api
