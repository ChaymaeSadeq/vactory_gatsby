import React from "react"
import {CardEvents, imageLayoutStyles, normalizeNodes, postsQueryParams} from "vactory-gatsby-events";
import {VCC} from "vactory-gatsby-vcc";
import {useTranslation} from "react-i18next"

const Post = ({post}) => {
    const {t} = useTranslation();

    return (
        <div>
            <main>
                <h1>{post.title}</h1>
                {/*<p>*/}
                {/*    {post.date}*/}
                {/*</p>*/}
                {/*<div>{post.body}</div>*/}
                <VCC
                    nid={post.drupal_internal__nid}
                    title={t('Événements similaires')}
                    resource={'events'}
                    resourceType={'node--events'}
                    queryParams={postsQueryParams}
                    normalizer={normalizeNodes}
                    renderNode={
                        node =>  <CardEvents {...node} imageSettings={imageLayoutStyles.threeColumns} />
                    }
                />
            </main>
        </div>
    )
}

export default Post
