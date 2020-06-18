import React from 'react'
import {Flex} from 'vactory-ui'
import {CardNews, imagesStyles} from 'vactory-gatsby-news'

export const TwoColumns = ({posts}) => {
    return (
        <div>
            <Flex flexWrap="wrap">
                {posts.map(node => {
                    return (
                        <Flex key={node.key} px="8px" width={[1, 1 / 2, 1 / 2]}>
                            <CardNews {...node} imageSettings={imagesStyles.twoColumns} />
                        </Flex>
                    )
                })}
            </Flex>
        </div>
    )
};
