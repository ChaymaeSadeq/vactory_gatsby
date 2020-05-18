import React from "react"
import {useTranslation} from "react-i18next";

const PostsFormFilter = ({terms, value, handleChangeThematic, handleChangeMediaType}) => {
    const { t } = useTranslation();

    return (
        <div>
            <label htmlFor="annual-report-thematic">{t('Thématique')}</label>
            <select
                id="annual-report-thematic"
                onBlur={null}
                onChange={(e) => handleChangeThematic(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Tous les thématiques')}</option>
                {terms.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>

            <label htmlFor="annual-report-media-type">{t('Media type')}</label>
            <select
                id="annual-report-media-type"
                onBlur={null}
                onChange={(e) => handleChangeMediaType(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Tous les media type')}</option>
                {terms.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default PostsFormFilter
