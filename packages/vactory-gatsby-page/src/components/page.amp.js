import React from "react"
import {ParagraphsController} from 'vactory-gatsby-ui'

const PageAmp = ({page}) => (
    <div>

        {page.field_vactory_paragraphs && page.field_vactory_paragraphs.map((paragraph) => {
            return (
                <ParagraphsController key={paragraph.id} data={paragraph} hasAMP={true}/>
            )
        })}
    </div>
);

export default PageAmp
