import React from "react"
import {useTranslation} from "react-i18next";

const PostsFormFilter = ({cities, contracts, professions, value, handleChangeCity, handleChangeContract, handleChangeProfession}) => {
    const { t } = useTranslation();

    return (
        <div>
            <label htmlFor="job-ads-cities">{t('Ville')}</label>
            <select
                id="job-ads-cities"
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

            <label htmlFor="job-ads-contracts">{t('Contrat')}</label>
            <select
                id="job-ads-contracts"
                onBlur={null}
                onChange={(e) => handleChangeContract(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Tous les contrats')}</option>
                {contracts.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>

            <label htmlFor="job-ads-professions">{t('Profession')}</label>
            <select
                id="job-ads-professions"
                onBlur={null}
                onChange={(e) => handleChangeProfession(e.target.value)}
                defaultValue={value}
            >
                <option value="all">{t('Tous les professions')}</option>
                {professions.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default PostsFormFilter
