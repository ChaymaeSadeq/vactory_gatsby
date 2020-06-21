import React from "react"
import {Comments} from 'vactory-gatsby-comments'

const Post = ({post}) => {
    return (
        <div>
            <main>
                <h1>Custompost</h1>
                <h1>{post.title}</h1>
                {/*<p>*/}
                {/*    {post.date}*/}
                {/*</p>*/}
                {/*<div>{post.body}</div>*/}
                <Comments entity_uid={'6447120d-afc0-4226-a41f-c5206922fda2'} uid={1} type_content={'vactory_news'} />
            </main>
        </div>
    )
}

export default Post
