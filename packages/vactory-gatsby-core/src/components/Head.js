import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";

function Head({title = '', meta, lang = ''}) {
    let pageTitle = title;
    let metas = [];
    meta.forEach(function (value) {
        if (value.tag === "meta") {
            if (value.attributes.name === "title") {
                pageTitle = value.attributes.content
            } else {
                metas.push(value.attributes)
            }
        }
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
    meta: [],
};

Head.propTypes = {
    meta: PropTypes.array,
};

export default Head
