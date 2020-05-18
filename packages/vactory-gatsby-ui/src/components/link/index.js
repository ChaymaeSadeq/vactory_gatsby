import React from "react"
import {Link as GatsbyLink} from "gatsby"
import styled from 'styled-components'
import {space, layout, typography, color} from 'styled-system'

const StyledGatsbyLink = styled(GatsbyLink)`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

export const Link = props => {
    const {to, ...newProps} = props
    const internal = /^\/(?!\/)/.test(to)
    const isFile = /^\/sites\/default\/(?!\/)/.test(to)

    if (internal && !isFile) {
        return <StyledGatsbyLink style={{
            textDecoration: 'none'
        }} {...props}>{props.children}</StyledGatsbyLink>
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
