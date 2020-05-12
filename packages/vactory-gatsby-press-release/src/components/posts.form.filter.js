import React from "react"
import {useTranslation} from "react-i18next";

const PostsFormFilter = ({terms, value, handleChange}) => {
    const { t } = useTranslation();

    return (
        <div>
            <label htmlFor="press-release-theme">{t('Thématique')}</label>
            <select
                id="press-release-theme"
                onBlur={null}
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Tous les thématiques')}</option>
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
