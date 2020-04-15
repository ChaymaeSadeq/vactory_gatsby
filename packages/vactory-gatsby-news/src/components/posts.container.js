import React from "react"
import Api from "vactory-gatsby-api"
import {nodesNewsParams} from 'vactory-gatsby-news'
import PostsPage from "./posts"

const PostsContainer = ({pageContext: {posts}}) => {
    Api.getResources('node/vactory_news', nodesNewsParams).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    });

    return <PostsPage posts={posts}/>
}

export default PostsContainer
