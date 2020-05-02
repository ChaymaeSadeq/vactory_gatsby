import React from "react"
import {useTranslation} from "react-i18next";

const PostsFormFilter = ({terms, cities, value, handleChangeCategory, handleChangeCity}) => {
    const { t } = useTranslation();

    return (
        <div>
            <label htmlFor="events-category">{t('Thématique')}</label>
            <select
                id="events-category"
                onBlur={null}
                onChange={(e) => handleChangeCategory(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Tous les thématiques')}</option>
                {terms.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>
                
            <label htmlFor="events-cities">{t('Ville')}</label>
            <select
                id="events-cities"
                onBlur={null}
                onChange={(e) => handleChangeCity(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Toutes les villes')}</option>
                {cities.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default PostsFormFilter
