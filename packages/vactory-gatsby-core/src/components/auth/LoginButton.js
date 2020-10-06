import React from 'react'
import {Box, Button, Icon} from 'vactory-ui'
import {useTranslation} from "react-i18next";

export const LoginButton = ({login}) => {
    const {t} = useTranslation();

    return (<Box marginLeft={'10px'}>
        <Button as="a" outline="primary" href={login} borderRadius="rounded">
            <Icon mr="5px" name="lock" size="20px"/>
            <span>{t('Se connecter')}</span>
        </Button>
    </Box>);
};
