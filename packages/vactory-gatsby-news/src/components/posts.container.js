import React from "react"
import PostsPage from "./posts"

const PostsContainer = ({pageContext: {posts}}) => {
    return <PostsPage posts={posts}/>
}

export default PostsContainer
