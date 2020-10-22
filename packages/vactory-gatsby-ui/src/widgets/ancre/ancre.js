import React from 'react'
import {Flex, Navs, Nav, Box, Label, Select} from 'vactory-ui'
import {useRtl} from 'vactory-gatsby-core'
import AnchorLink from "react-anchor-link-smooth-scroll"
import {useTranslation} from "react-i18next"

export const Ancre = ({items}) => {
    const {t} = useTranslation();
    const isRtl = useRtl();

    const layout = {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: 1,
        py: 'large',
        mb: 'large'
    };

    const jumpTo = (id) => {
        const $anchor = document.getElementById(id);
        $anchor.click();
    };

    return (
        <Box>
            <Box display={['none', 'block']}>
                <Flex {...layout}>
                    <span>{t("Sur cette page")}</span>
                    <Navs variant="navs.ancre">
                        {items.map((item, index) => {
                            return (
                                <Nav key={index} as={AnchorLink} id={`ancre-${item.id}`}
                                     href={`#${item.id}`}>{item.title}</Nav>
                            )
                        })}
                    </Navs>
                </Flex>
            </Box>
            <Box display={['block', 'none']}>
                <Flex {...layout}>
                    <Label sx={{
                        marginRight: isRtl ? null : '10px',
                        marginLeft: isRtl ? '10px' : null,
                    }} htmlFor={'factory-ancre'}>{t("Sur cette page")}</Label>
                    <Select
                        id='factory-ancre'
                        name='factory-ancre'
                        onChange={(e) => jumpTo(e.currentTarget.value)}
                    >
                        {items.map((item, index) => {
                            return (
                                <option key={index} value={`ancre-${item.id}`}>{item.title}</option>
                            )
                        })}
                    </Select>
                </Flex>
            </Box>
        </Box>
    )
};
