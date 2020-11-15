import React from "react";
import {Button} from 'vactory-ui'

export const LinkUrl = ({url, title, attributes, ...rest}) => {
    let attrs = {}
    if(attributes && attributes.class) attrs.className = attributes.class;
    if(attributes && attributes.rel) attrs.rel = attributes.rel;
    if(attributes && attributes.id) attrs.id = attributes.id;
    if(attributes && attributes.target) attrs.target = attributes.target;
    return (
        <Button as="a"
                href={url}
                {...attrs}
                {...rest}>{title}</Button>
    )
}