import React from "react";
import {Picture} from "vactory-gatsby-ui";
import {Box, Heading, Paragraph} from 'vactory-ui'

const imageStylesCyrcle = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 0px)"
        },
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200
};

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_354_200",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 354,
    height: 200,
    ratio: 354 / 200
};

export const TeamsColonnes = ({imageUrl, image_alt, name, role, description, image_cyrcle}) => {
    const CurrentImageStyle = image_cyrcle ? imageStylesCyrcle : imageStyles;
    return (
        <Box textAlign="center" mb="large">
            <Box mb='medium'
                 borderRadius={image_cyrcle ? "rounded" : null}
                 width={image_cyrcle ? CurrentImageStyle.width : '1'}
                 mx="auto"
                 overflow="hidden"
                 sx={{position: 'relative'}}
            >
                <Picture
                    file={imageUrl}
                    alt={image_alt}
                    sizes={CurrentImageStyle.sizes}
                    width={CurrentImageStyle.width}
                    height={CurrentImageStyle.height}
                    ratio={CurrentImageStyle.ratio}
                />
            </Box>
            <Heading level={4} mb='0px'>{name}</Heading>
            <Paragraph fontSize="body" fontStyle="italic" lineHeight="body" level={5}>{role}</Paragraph>
            <Paragraph>{description}</Paragraph>
        </Box>
    )
}