import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next"

function Head({title = '', meta = [], lang = ''}) {
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language;

    let pageTitle = title;
    let metas = [];

    if (meta) {
        meta.forEach(function (value) {
            if (value.tag === "meta") {
                if (value.attributes.name === "title") {
                    pageTitle = value.attributes.content
                } else {
                    metas.push(value.attributes)
                }
            }
        });
    }

    return (
        <Helmet
            htmlAttributes={{
                lang: currentLanguage,
                dir: currentLanguage === "ar" ? "rtl" : "ltr",
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
