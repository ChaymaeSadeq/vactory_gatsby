import React from "react"
import {SocialShare, WebShare} from "vactory-gatsby-ui"
import {VCC} from "vactory-gatsby-vcc"
import {CardNews, imageLayoutStyles, normalizeNodes, postsQueryParams} from "vactory-gatsby-news"

const Post = ({post}) => {
    return (
        <div>
            <main>
                <h1>{post.title}</h1>
                {/*<p>*/}
                {/*    {post.date}*/}
                {/*</p>*/}
                {/*<div>{post.body}</div>*/}
                <SocialShare />
                <WebShare />
                <VCC
                    nid={post.drupal_internal__nid}
                    resource={'vactory_news'}
                    resourceType={'node--vactory_news'}
                    queryParams={postsQueryParams}
                    normalizer={normalizeNodes}
                    renderNode={
                        node =>  <CardNews {...node} imageSettings={imageLayoutStyles.threeColumns} />
                    }
                />
            </main>
        </div>
    )
}

export default Post
