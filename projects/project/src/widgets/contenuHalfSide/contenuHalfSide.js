import React from "react";
import {Box, Heading, Link, Flex, Paragraph} from 'vactory-ui'

export const ContenuHalfSide = ({title, description, cta_text, cta_url, inversed, centercontent}) => {
    const contentTextAlign = centercontent ? 'center' : 'left'
    return (
        <Flex py={['xlarge', 'xxlarge', 'xxxlarge']}>
            <Box
                textAlign={contentTextAlign}
                width={['100%', '60%', '50%', '40%']}
                backgroundColor="white"
                p="large"
                ml={!inversed ? 'auto' : '0'}
                mr={inversed ? 'auto' : '0'}
            >
                {title &&
                <Heading level={3}>{title}</Heading>
                }
                {description &&
                <Paragraph>{description}</Paragraph>
                }
                {(cta_text && cta_url) &&
                <Link outline="primary" borderRadius="rounded" href={cta_url}>{cta_text}</Link>
                }
            </Box>
        </Flex>
    )
}