import React from "react"
import {PostPage} from "vactory-gatsby-news"

const PostContainer = ({pageContext: {node}}) => {
    return <PostPage post={node} />
};

export default PostContainer
