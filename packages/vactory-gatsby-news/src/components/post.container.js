import React from "react"
import PostPage from "./post"

const PostContainer = ({pageContext: {post}}) => {
    return <PostPage post={post} />
}

export default PostContainer
