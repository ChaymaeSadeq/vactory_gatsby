import React from "react"
import {Page} from "vactory-gatsby-page"

const PageContainer = ({pageContext: {node}}) => {
    return <Page page={node} />
};

export default PageContainer
