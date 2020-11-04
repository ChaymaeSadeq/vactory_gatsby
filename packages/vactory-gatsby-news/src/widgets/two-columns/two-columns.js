import React from 'react'
import {Flex} from 'vactory-ui'
import {CardNews, imageLayoutStyles} from 'vactory-gatsby-news'

export const TwoColumns = ({posts}) => {
    return (
        <div>
            <Flex flexWrap="wrap">
                {posts.map(node => {
                    return (
                        <Flex key={node.id} px="8px" width={[1, 1 / 2, 1 / 2]}>
                            <CardNews {...node} imageSettings={imageLayoutStyles.twoColumns} />
                        </Flex>
                    )
                })}
            </Flex>
        </div>
    )
};
