import React from "react"
import {PageAmp} from "vactory-gatsby-page"

const PageAmpContainer = ({pageContext: {node}}) => {
    return <PageAmp page={node} />
};

export default PageAmpContainer
