import React from "react"
import PostApplyForm from "./post.applyForm"

const PostApplyFormContainer = ({pageContext: {node}}) => {
    return <PostApplyForm post={node} />
};

export default PostApplyFormContainer
