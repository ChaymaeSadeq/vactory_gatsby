import React from "react"
import {Link as GatsbyLink} from "gatsby"
import styled from 'styled-components'

const StyledGatsbyLink = styled(GatsbyLink).withConfig({
    shouldForwardProp: (prop) => !['borderRadius'].includes(prop),
})`
  text-decoration: none;
`;

export const Link = props => {
    let { to, ...newProps } = props;
    to ??= props?.href;
    const internal = /^\/(?!\/)/.test(to)
    const isFile = /^\/sites\/default\/(?!\/)/.test(to)

    if (internal && !isFile) {
        return <StyledGatsbyLink to={to} {...newProps}>{props.children}</StyledGatsbyLink>
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
