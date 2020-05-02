import React from "react"
import PostPage from "./post"

const PostContainer = ({pageContext: {node}}) => {
    return <PostPage post={node} />
};

export default PostContainer
