import React from "react"
import {SocialShare} from "vactory-gatsby-ui"
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
            </main>
        </div>
    )
}

export default Post
