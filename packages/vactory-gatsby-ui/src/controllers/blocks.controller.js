import React from "react"
import {BlocksTemplate} from "vactory-gatsby-ui";

export const BlocksController = ({blocks = [], region = ''}) => {
    const regionBlocks = blocks.filter(block => block.region === region)

    if (regionBlocks.length <= 0) {
        return null;
    }

    return <React.Fragment>
        {regionBlocks && regionBlocks.map((block) => <BlocksTemplate key={block.id}
                                                                     widget={block.content}
                                                                     hasAMP={false}/>
        )}
    </React.Fragment>
}
