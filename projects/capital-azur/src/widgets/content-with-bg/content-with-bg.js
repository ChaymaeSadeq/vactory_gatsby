import React from 'react'
import { Link } from 'vactory-gatsby-ui'

export const ContentWithBg = (props) => {
    const title = props.title
    const description = props.description
    const link = props.link
    const link_label = props.link_label
    const image = props.image
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{title}</h1>
            {description}
            <img alt={title} src={image}/>
            <Link to={link}>{link_label}</Link>
        </div>
    )
};
