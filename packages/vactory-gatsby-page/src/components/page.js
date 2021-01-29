import React from "react"
import {ParagraphsController} from 'vactory-gatsby-ui'

const Page = ({page}) => (
    <React.Fragment>
        {page.field_vactory_paragraphs && page.field_vactory_paragraphs.map((paragraph) => (
            <ParagraphsController key={paragraph.id} data={paragraph} hasAMP={false}/>
        ))}
    </React.Fragment>
)

export default Page
