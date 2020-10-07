import React from 'react';
import {
    Flex,
    Icon,
    Layer,
    Link,
} from 'vactory-ui';
import { useMenu } from 'vactory-gatsby-core'

export const SocialMediaToolbox = (props) => {
    const plateforms = useMenu('social-media');

    return <Layer
        animation='fadeIn'
        full='horizontal'
        position="left"
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

                {plateforms.map( (plateform) => <Link
                    key={plateform.id}
                    sx={{
                        bg: 'primary',
                        p: 0,
                        transition: '.3s',
                        border: 0,
                        '&:hover': {
                            bg: 'primary',
                            color: 'darkBlue',
                        }
                    }} href={plateform.url} {...plateform.options.attributes} >
                    <Icon name={plateform.title.toLocaleLowerCase()} size='22px' sx={{
                        mx: 'auto',
                        my: 10,
                    }} />
                </Link> )}

            </Flex>
    </Layer>
}