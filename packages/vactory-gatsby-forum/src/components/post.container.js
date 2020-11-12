import React from "react"
import {PostPage} from "vactory-gatsby-forum"

const PostContainer = ({pageContext: {node}}) => {
    return <PostPage post={node} />
};

export default PostContainer
