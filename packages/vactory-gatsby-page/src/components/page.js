import React from "react"
import {ParagraphsController} from 'vactory-gatsby-ui'

const Page = ({page}) => (
    <div>
        {page.field_vactory_paragraphs.map((paragraph) => {
            return (
                <ParagraphsController key={paragraph.id} data={paragraph} hasAMP={false}/>
            )
        })}
    </div>
);

export default Page
