import React from 'react'
import {Button, Flex, Layer, Text} from 'vactory-ui'
import {useTranslation} from "react-i18next"

export const ModalMessage = ({message = '', onClose}) => {
    const {t} = useTranslation();

    return <Layer onClickOutside={onClose}>
        <Flex p="medium" boxShadow={4} flexDirection="column" bg="white" borderRadius="small" maxWidth="400px">
            <Flex>
                <Text>{message}</Text>
            </Flex>
            <Flex mt="medium" justifyContent="flex-end">
                <Button borderRadius="rounded" mx="small" variant="danger"
                        onClick={onClose}>{t('webform:Close')}</Button>
            </Flex>
        </Flex>
    </Layer>
};
