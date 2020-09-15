import React from 'react';
import {
    Flex,
    Icon,
    Layer,
    Link,
} from 'vactory-ui';

export const FloatingBox = ({plateforms=[
    {
        icon: 'facebook',
        link: '//facebook.com'
    },
    {
        icon: 'twitter',
        link: '//twitter.com'
    },
    {
        icon: 'youtube',
        link: '//youtube.com'
    },
    {
        icon: 'linkedin',
        link: '//linkedin.com'
    }
    ], ...rest}) => {
    return <Layer
        animation='fadeIn'
        full='horizontal'
        position="right"
        modal={false}
        plain={true}
        css={{
            width: 50,
            marginLeft: 10,
        }} >
            <Flex 
                __css={{
                    width: 50,
                    flexDirection: 'column',
                    backgroundColor: 'primary',
                    borderRadius: 8,
                    border: '1px solid white',
                    boxShadow: '10px 12px 14px -5px rgba(191, 191, 191, .67)',
                    py: 5,
                }} >

                {plateforms.map( ({icon, link}, i) => <Link
                    key={i}
                    sx={{
                        bg: 'primary',
                        p: 0,
                        transition: '.3s',
                        border: 0,
                        '&:hover': {
                            bg: 'primary',
                            color: 'darkBlue',
                        }
                    }} href={link} target='_blank'>
                    <Icon name={icon} size='22px' sx={{
                        mx: 'auto',
                        my: 10,
                    }} />
                </Link> )}

            </Flex>
    </Layer>
}