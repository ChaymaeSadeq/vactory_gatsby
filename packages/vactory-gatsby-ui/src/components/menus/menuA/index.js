import React from "react"
import {Box, Nav, Navs} from "vactory-ui";
import {useMenu} from 'vactory-gatsby-core'
import {Link} from 'vactory-gatsby-ui'

export const MenuA = () => {
    const items = useMenu('main');

    return (
        <Box>
            <Navs>
                {items.map(item => {
                    return (
                        <Nav key={item.id} as={Link} to={item.url}>{item.title}</Nav>
                    )
                })}
            </Navs>
        </Box>
    )
};
