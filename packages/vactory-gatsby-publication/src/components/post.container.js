import React from "react"
import {PostPage} from "vactory-gatsby-publication"

const PostContainer = ({pageContext: {node}}) => {
    return <PostPage post={node} />
};

export default PostContainer
