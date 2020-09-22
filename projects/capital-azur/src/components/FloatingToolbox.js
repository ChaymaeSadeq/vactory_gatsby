import React from 'react';
import {
    Flex,
    Layer,
    Link,
} from 'vactory-ui';
import { useMenu } from 'vactory-gatsby-core';

export const FloatingToolbox = (props) => {
    const links = useMenu('toolbox');

    return <Layer
        animation='fadeIn'
        full='horizontal'
        position="right"
        modal={false}
        plain={true}
        css={{
            maxWidth: 225,
            left: 'auto',
        }} >
            <Flex 
                __css={{
                    maxWidth: 225,
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    borderRadius: 8,
                    border: '1px solid white',
                    // boxShadow: '10px 12px 14px -5px rgba(191, 191, 191, .67)',
                    py: 0,
                }} >

                {links.map( (link) => <Link
                    variant='buttons.white'
                    key={link.id}
                    sx={{
                        border: 0,
                        '&:first-child': {
                            borderBottomLeftRadius: '0 !important',
                            borderBottomRightRadius: '0 !important',
                        },
                        '&:not(:first-child):not(:last-child)': {
                            borderRadius: '0 !important',
                        },
                        '&:last-child': {
                            borderTopLeftRadius: '0 !important',
                            borderTopRightRadius: '0 !important',
                        },
                    }} href={link.url} target='_blank'>
                    {link.title}
                </Link> )}

            </Flex>
    </Layer>
}