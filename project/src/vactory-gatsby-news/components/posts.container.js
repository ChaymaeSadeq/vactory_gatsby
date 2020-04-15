import React from "react"
import PostsPage from "./posts"

const PostsContainer = ({pageContext: {posts}}) => {
    return <PostsPage posts={posts} pageTitle="Hello my custom page title"/>
}

export default PostsContainer
