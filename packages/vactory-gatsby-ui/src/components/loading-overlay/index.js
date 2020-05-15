import React from "react"
import {default as BaseLoadingOverlay} from 'react-loading-overlay';
import {useTranslation} from "react-i18next"
import styled from "styled-components"

const StyledLoadingOverlay = styled(BaseLoadingOverlay)`  
      min-height: 200px;
      
      > div._loading_overlay_overlay {
        background: rgba(0, 0, 0, 0.46);
      }
`;

export const LoadingOverlay = ({children, ...rest}) => {
    const {t} = useTranslation();
    return (
        <StyledLoadingOverlay
            spinner
            text={t('Chargement du contenu ...')}
            {...rest}
        >
            {children}
        </StyledLoadingOverlay>
    )
};
