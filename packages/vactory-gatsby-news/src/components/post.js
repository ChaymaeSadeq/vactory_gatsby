import React from "react"
import {SocialShare, WebShare, Wysiwyg} from "vactory-gatsby-ui"
import {VCC} from "vactory-gatsby-vcc"
import {NextPre} from "vactory-gatsby-nextpre"
import {CardNews, imageLayoutStyles, normalizeNodes, postsQueryParams, PostSchema} from "vactory-gatsby-news"

const Post = ({post}) => {
    const bodyMarkup = <Wysiwyg html={post.body.processed}/>;

    return (
        <div>
            <PostSchema
                headline={post.title}
                datePublished={post.field_vactory_date}
                imageURL={post.field_vactory_media_image.thumbnail.uri.value._default}
            />
            <div className="container">
                <div className="mx-auto prose prose-lg border-b border-gray-400">
                    <h2>{post.title}</h2>
                    <span>{post.field_vactory_date}</span>
                    <hr />
                    <div className="py-4">{bodyMarkup}</div>
                </div>
                <SocialShare/>
                <WebShare/>
            </div>
            <VCC
                nid={post.drupal_internal__nid}
                resource={'vactory_news'}
                resourceType={'node--vactory_news'}
                queryParams={postsQueryParams}
                normalizer={normalizeNodes}
                renderNode={
                    node => <CardNews {...node} imageSettings={imageLayoutStyles.threeColumns}/>
                }
            />
            <NextPre
                nid={post.drupal_internal__nid}
                resource={'vactory_news'}
                queryParams={postsQueryParams}
                normalizer={normalizeNodes}
            />
        </div>
    )
};

export default Post
