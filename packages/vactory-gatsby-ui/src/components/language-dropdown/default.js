import React from "react"
import {useTranslation} from "react-i18next";
import {AppSettings} from 'vactory-gatsby-core'

export default ({pageInfo, currentLanguage}) => {
    const {t} = useTranslation();
    const languages = AppSettings.languages.languageLabels;

    const switchLanguage = (selectedLng) => {
        const {path} = pageInfo.find(route => route.locale === selectedLng);
        window.location = path
    };

    return (
        <div>
            <label htmlFor="language-dropdown">{t('Langue')}</label>
            <select
                id="language-dropdown"
                onBlur={null}
                onChange={(e) => switchLanguage(e.target.value)}
                defaultValue={currentLanguage}
            >
                {languages.map(lng => {
                    return (
                        <option key={lng.code} value={lng.code}>{lng.label}</option>
                    )
                })}
            </select>
        </div>
    )
}
