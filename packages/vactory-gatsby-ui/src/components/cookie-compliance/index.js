import React, {useEffect, useState} from "react"
import {Box, Button, Flex, Layer, Text, Icon, Anchor} from "vactory-ui";
import {useTranslation} from "react-i18next"
import Cookies from "js-cookie"
import isClient from "is-client"

export const CookieComplianceLayer = () => {
    const {t} = useTranslation();
    const cookieName = "hasConsent";
    const expires = 150;

    const [showCookie, setShowCookie] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onAccept = () => {
        Cookies.set(cookieName, true, {expires: expires});
        setShowCookie(false);
        setShowModal(false);
    };

    const onDecline = () => {
        Cookies.set(cookieName, false, {expires: expires})
        setShowCookie(false);
        setShowModal(false);
    };

    // Check cookie on load.
    useEffect(() => {
        if (Cookies.get(cookieName) === undefined) {
            setShowCookie(true);
        }
    }, []);

    // No cookie layer on SSR.
    if (!isClient()) {
        return null;
    }

    return (
        <Box>
            {showCookie && (
                <Layer
                    full="horizontal"
                    modal={false}
                    position="bottom"
                    plain={true}
                    onClickOutside={onDecline}>
                    <Flex position="relative" py="large" px="xlarge" color="white" bg="black900">
                        <Button borderRadius="rounded" padding="small" sx={{
                            position: 'absolute',
                            right: '40px',
                            top: '-20px',
                            transform: 'rotate(45deg)'
                        }} size="none" onClick={onDecline}>
                            <Icon name="add-simple" size="14px"/>
                        </Button>
                        <Flex>
                            <Text lineHeight="20px">
                                {t("Nous utilisons des cookies afin d’améliorer votre expérience de navigation sur notre site. Vous pouvez obtenir des informations sur ces cookies ou modifier les réglages d’acceptation en cliquant")}
                                <Anchor color={'info700'}
                                        onClick={() => setShowModal(true)}><strong> {t('ici')} </strong></Anchor>.
                                {t('En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de ces cookies.')}
                            </Text>
                        </Flex>
                    </Flex>
                </Layer>
            )}

            {showModal && (
                <Layer>
                    <Flex sx={{
                        padding: "medium",
                        boxShadow: 3,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        border: '1px solid',
                        borderColor: 'gray300',
                        borderRadius: 'small',
                        maxWidth: '400px'
                    }}>

                        <Flex mb="medium">
                            <Text level="1" fontSize="18px">
                                {t('Les cookies Google Analytics')}
                            </Text>
                        </Flex>
                        <Flex>
                            <Text>
                                {t("Nous utilisons des cookies de Google Analytics, ces cookies nous aident à identifier le contenu qui vous interesse le plus ainsi qu'à repérer certains dysfonctionnements. Vos données de navigations sur ce site sont envoyées à Google Inc")}
                            </Text>
                        </Flex>
                        <Flex mt="medium" justifyContent="flex-end">
                            <Button borderRadius="rounded" mx="small" onClick={onAccept}>
                                {t('Accepter')}
                            </Button>
                        </Flex>
                    </Flex>
                </Layer>
            )}
        </Box>
    )
};
