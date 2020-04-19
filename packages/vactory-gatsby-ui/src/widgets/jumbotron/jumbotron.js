import React from 'react'

export const Jumbotron = ({title, description, lead, url, url_label}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{lead}</p>
            <p>{description}</p>
            <p>URL: {url}</p>
            <p>URL label: {url_label}</p>
        </div>
    )
};
