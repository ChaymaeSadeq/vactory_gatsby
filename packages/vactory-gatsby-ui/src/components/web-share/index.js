import React from 'react'
import isClient from "is-client"
import {Toast} from 'vactory-gatsby-ui';
import {useTranslation} from "react-i18next"
import {Box, Flex, Icon} from 'vactory-ui'

const Title = ({children, ...rest}) => {
    return (
        <Flex
            as="h6"
            alignItems='center'
            __css={{
                fontSize: ['15px', null, '17px', null],
                lineHeight: '28px',
                fontWeight: 400,
                color: '#707070',
                cursor: 'pointer',
                '&:hover': {
                    color: 'primary500'
                }
            }}
            {...rest}
        >
            {children}
        </Flex>
    )
};

const WebShareWrapper = ({children}) => {
    // Disable on SSR.
    if (!isClient()) {
        return null
    }

    // Check for support.
    if (typeof navigator.share === 'undefined') {
        return null;
    }

    return children
};

export const WebShare = ({title = '', text = '', url = ''}) => {
    const {t} = useTranslation();
    const [internalUrl, setInternalUrl] = React.useState(url);

    // Share title
    let internalTitle = title.length > 0 ? title : document.title;

    // Share URL.
    React.useEffect(() => {
        if (url.length <= 0 && typeof window !== 'undefined') {
            setInternalUrl(window.location.href);
            const canonicalElement = document.querySelector('link[rel=canonical]');
            if (canonicalElement !== null) {
                setInternalUrl(canonicalElement.href);
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const share = () => {
        navigator.share({
            title: internalTitle,
            text: text,
            url: internalUrl,
        })
            .then(() => Toast.success(t("Merci d'avoir partager le lien.")))
            .catch(() => Toast.error(t("Une erreur s'est produite lors du partage")));
    };

    return (
        <WebShareWrapper>
            <Flex flexDirection={['column', 'row']} alignItems="center">
                <Title onClick={share}>
                    <Box>{t('Vous avez aimé cette page ? Partagez la !')}</Box>
                    <Icon mx='10px' name="international" size="30px"/>
                </Title>
            </Flex>
        </WebShareWrapper>
    )
};
