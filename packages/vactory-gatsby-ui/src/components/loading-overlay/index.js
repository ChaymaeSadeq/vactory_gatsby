import React from "react"
import BaseLoadingOverlay from 'react-loading-overlay';
import {useTranslation} from "react-i18next"

export const LoadingOverlay = ({children, ...rest}) => {
    const {t} = useTranslation();
    return (
        <BaseLoadingOverlay
            spinner
            text={t('Chargement du contenu ...')}
            styles={{
                wrapper: (base) => ({
                    ...base,
                    minHeight: 200,
                }),
                overlay: (base) => ({
                    ...base,
                    background: 'rgba(0, 0, 0, 0.46)',
                })
            }}
            {...rest}
        >
            {children}
        </BaseLoadingOverlay>
    )
};
