import React from 'react'
import {Container, Flex, Heading, Box} from 'vactory-ui'
import {Breadcrumb} from 'vactory-gatsby-ui'

export const BannerA = ({settings}) => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            backgroundColor="gray400"
            sx={{
                minHeight: '180px',
                py: 'large',
                backgroundImage: `url(${settings.image._default})`,
                backgroundSize: 'cover',
                color: 'white',
                bg: 'gray',
            }}
        >
            <Container>
                <Heading level="1" color={'white'}>{settings.title}</Heading>
                <Box>{settings.description}</Box>
                {settings.useBreadcrumb && settings.breadcrumbItems.length > 0 &&
                <Breadcrumb items={settings.breadcrumbItems}/>
                }
            </Container>
        </Flex>
    )
};
