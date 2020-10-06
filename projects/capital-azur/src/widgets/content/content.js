import React from 'react'
import { TextSection } from '../../components/TextSection'

export const Content = (props) => {
    const title = props.title
    const description = props.description
    const link = {
        href: props.link,
        label: props.link_label,
    }

    return <TextSection
        title={title}
        body={description}
        link={link} />
}
