import React from "react";
import {Box, Heading, Paragraph} from "vactory-ui";

export const TemplateWrapper = ({bigTitle, intro, children}) => {
    return (
        <Box py={['large', null, 'xlarge']}>
            {(bigTitle || bigTitle) &&
            <Box mb={30}>
                {bigTitle &&
                <Heading level={2}>{bigTitle}</Heading>
                }
                {intro &&
                <Paragraph fontSize="title" lineHeight="title">{intro}</Paragraph>
                }
            </Box>
            }
            <>
                {children}
            </>
        </Box>
    )
}