import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
// import {useTranslation} from "react-i18next";

function Head({title = '', meta, lang = ''}) {
    // const {i18n} = useTranslation();
    const tags = (meta !== "") ? JSON.parse(meta) || [] : [];
    let pageTitle = title || "";

    if (tags.title && tags.title["#attributes"]) {
        pageTitle = tags.title["#attributes"].content
    }

    // Delete unused.
    if (tags.title) {
        delete tags.title
    }
    if (tags.canonical_url) {
        delete tags.canonical_url
    }

    let metas = [];
    Object.keys(tags).forEach(function (key) {
        metas.push(tags[key]["#attributes"])
    });

    return (
        <Helmet
            htmlAttributes={{
                lang,
                dir: lang === "ar" ? "rtl" : "ltr",
            }}
            title={pageTitle}
            meta={metas}
        />
    )
}

Head.defaultProps = {
    title: "",
    meta: "",
};

Head.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.string,
};

export default Head
