import React from 'react'
import { ImageAndTextSection } from '../../components/ImageAndTextSection'

export const ContentWithBg = (props) => {
    const title = props.title
    const description = props.description
    const image = props.image
    const link = {
        href: props.link,
        label: props.link_label
    }
    const mode = props.mode

    return <ImageAndTextSection
        title={title}
        body={description}
        image={image}
        link={link}
        mode={mode} />
}
