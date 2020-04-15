import React from "react"
import Api from "vactory-gatsby-api"
import {nodesNewsParams} from 'vactory-gatsby-news'
import PostsPage from "./posts"

const PostsContainer = ({pageContext: {posts}}) => {
    Api.getResources('node/vactory_news', {
        ...nodesNewsParams,
        page: {
            ...nodesNewsParams.page,
            limit: 5
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    });

    return <PostsPage posts={posts} pageTitle="My Page title" />
};

export default PostsContainer
