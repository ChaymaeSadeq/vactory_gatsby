import React from 'react'
import {Flex, Navs, Nav} from 'vactory-ui'
import AnchorLink from "react-anchor-link-smooth-scroll"
import {useTranslation} from "react-i18next"

export const Ancre = ({items}) => {
    const {t} = useTranslation();

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            backgroundColor="white"
            boxShadow={1}
            py="large"
            mb="large"
        >
            <span>{t("Sur cette page")}</span>
            <Navs variant="navs.ancre">
                {items.map((item, index) => {
                    return (
                        <Nav key={index} as={AnchorLink} href={`#${item.id}`}>{item.title}</Nav>
                    )
                })}
            </Navs>
        </Flex>
    )
};
