import React from "react"
import {CardNews} from 'vactory-gatsby-news'
// import {Link} from "gatsby"
import {Flex} from "vactory-ui";

const Posts = ({posts}) => {
    return (
        <div>
            <Flex flexWrap="wrap">
                {posts.map(node => {
                    return (
                   
                        <Flex key={node.id} px="8px" width={[1, 1 / 2, 1 / 3]}>
                            <CardNews {...node} />
                        </Flex>
                    )
                })}
            </Flex>
        </div>
    )
};

export default Posts
