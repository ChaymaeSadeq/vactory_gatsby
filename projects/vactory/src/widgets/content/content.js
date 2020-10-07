import React from 'react'
import { Link } from 'vactory-gatsby-ui'

export const Content = (props) => {
    const title = props.title
    const description = props.description
    const link = props.link
    const link_label = props.link_label
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{title}</h1>
            {description}
            <Link to={link}>{link_label}</Link>
        </div>
    )
};
