import React from "react"
import Page from "./page"

const PageContainer = ({pageContext: {node}}) => {
    return <Page page={node} />
};

export default PageContainer
