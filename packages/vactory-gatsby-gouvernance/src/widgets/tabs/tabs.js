import React from 'react'
import {Flex, Tabs as BaseTabs, Tab} from 'vactory-ui'
import {CardGouvernance} from 'vactory-gatsby-gouvernance'
import { imageLayoutStyles } from "vactory-gatsby-gouvernance";


export const Tabs = ({posts, terms}) => {
    return (
        <BaseTabs variant="cardType">
            {terms.map(term => {
                const termPosts = posts.filter(post => post.role_id === term.id)

                return (
                    <Tab title={term.name} key={term.id}>
                        <Flex flexWrap="wrap">
                            {termPosts.map(node => {
                                return (
                                    <Flex key={node.key} px="8px" width={[1, 1 / 2, 1 / 3]}>
                                        <CardGouvernance {...node} imagesettings={imageLayoutStyles.tabs}/>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </Tab>
                )
            })}


        </BaseTabs>
    )
};
