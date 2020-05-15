import React from "react"
import {Link as GatsbyLink} from "gatsby"

export const Link = props => {
    const { to, ...newProps } = props
    const internal = /^\/(?!\/)/.test(to)
    const isFile = /^\/sites\/default\/(?!\/)/.test(to)

    if (internal && !isFile) {
        return <GatsbyLink style={{
            textDecoration: 'none'
        }} {...props}>{props.children}</GatsbyLink>
    }

    if (isFile) {
        return (
            <a {...newProps} href={`/backend${props.to}`}>
                {props.children}
            </a>
        )
    }


    return (
        <a {...newProps} href={props.to}>
            {props.children}
        </a>
    )
};
