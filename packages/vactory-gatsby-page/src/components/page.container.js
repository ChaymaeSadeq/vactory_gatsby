import React from "react"
import {Page} from "vactory-gatsby-page"

const PageContainer = ({pageContext: {node}}) => {
    console.log('************ Node id***************')
    console.log(node.id)
    return <Page page={node} />
};

export default PageContainer
