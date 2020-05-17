import React from 'react'
import {Tabs as BaseTabs, Tab, Box} from 'vactory-ui'

export const Tabs = ({items}) => {
    return (
        <BaseTabs variant="cardType">
            {items.map((item, index) => {
                return (
                    <Tab title={item.title} key={index}>
                        <Box>{item.description}</Box>
                    </Tab>
                )
            })}
        </BaseTabs>
    )
};
