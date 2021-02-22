import React from "react";

export const LinkUrl = ({url, title, attributes, children, ...rest}) => {
    let attrs = {}
    if(attributes && attributes.class) attrs.className = attributes.class;
    if(attributes && attributes.rel) attrs.rel = attributes.rel;
    if(attributes && attributes.id) attrs.id = attributes.id;
    if(attributes && attributes.target) attrs.target = attributes.target;
    return (
        <a className="border border-indigo-500 bg-indigo-100 hover:bg-indigo-500 hover:text-white px-3 py-1.5 rounded-md"
                href={url}
                {...attrs}
                {...rest}>{title || children}</a>
    )
}