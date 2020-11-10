import React from "react";
import {Picture} from "vactory-gatsby-ui";
import {Box, Heading, Paragraph} from 'vactory-ui'


export const TeamsColonnes = ({imageUrl, image_alt, name, role, description, image_cyrcle, imageStyles}) => {
    return (
        <Box textAlign="center" mb="large">
            <Box mb='medium'
                 borderRadius={image_cyrcle ? "rounded" : null}
                 width={image_cyrcle ? imageStyles.width : '1'}
                 mx="auto"
                 overflow="hidden"
                 sx={{position: 'relative'}}
            >
                <Picture
                    file={imageUrl}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </Box>
            <Heading level={4} mb='0px'>{name}</Heading>
            <Paragraph fontSize="body" fontStyle="italic" lineHeight="body" level={5}>{role}</Paragraph>
            <Paragraph>{description}</Paragraph>
        </Box>
    )
}