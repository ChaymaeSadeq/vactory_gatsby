import React from "react"


const Post = ({post}) => (
    <div>
        <main>
            <h1>{post.title}</h1>
            <p>
                {post.date}
            </p>
            <div>{post.body}</div>
        </main>
    </div>
)

export default Post
