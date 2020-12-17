import React from 'react'
import {List, Item, Box, Label, Select} from 'vactory-ui'
import AnchorLink from "react-anchor-link-smooth-scroll"
import {useTranslation} from "react-i18next"
import { Waypoint } from 'react-waypoint'
import Scrollspy from 'react-scrollspy'

export const Ancre = ({items}) => {
    const [shouldStick, setShouldStick] = React.useState(false);
    const [navsMinHeight, setNavsMinHeight] = React.useState();
    const desktopRef = React.createRef();
    const mobileRef = React.createRef();
    const {t} = useTranslation();

    const jumpTo = (id) => {
        const $anchor = document.getElementById(id);
        $anchor.click();
    };

    React.useEffect(
        () => setNavsMinHeight(desktopRef.current.clientHeight || mobileRef.current.clientHeight),
        [desktopRef, mobileRef]
    )

    return <Box style={{minHeight:  shouldStick ? navsMinHeight : null }}>
        <Waypoint onLeave={() => setShouldStick(true)} onEnter={() => setShouldStick(false)} />
        <Box variant="navs.ancre.wrapper" className={shouldStick ? 'stuck' : ''} >

            {/* For Desktop */}
            <Box display={['none', null, 'flex']} ref={desktopRef} variant="navs.ancre.layout">
                <Box mr={20} as="span">{t("Sur cette page")}</Box>
                <List
                    as={Scrollspy}
                    items={ items.map( i => i.id ) }
                    currentClassName="is-current"
                    offset={0}
                    horizontal
                    variant="navs.ancre"
                    className="stripe"
                >
                    {items.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                variant="navs.ancre.item"
                            >
                                <AnchorLink
                                    href={`#${item.id}`}
                                    id={`ancre-${item.id}`}
                                >
                                    {item.title}
                                </AnchorLink>
                            </Item>
                        )
                    })}
                </List>
            </Box>

            {/* For Mobile */}
            <Box display={['flex', null, 'none']} ref={mobileRef} variant="navs.ancre.layout">
                <Label mr={10} htmlFor={'factory-ancre'}>{t("Sur cette page")}</Label>
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
            </Box>
        </Box>
    </Box>
};
