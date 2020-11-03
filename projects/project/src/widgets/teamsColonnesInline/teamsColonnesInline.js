import React from "react";
import {Picture} from "vactory-gatsby-ui";
import {Box, Heading, Paragraph, Flex} from 'vactory-ui'

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 8px)"
        },
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200
};

export const TeamsColonnesInline = ({imageUrl, image_alt, name, role, description, activeBorder}) => {
    return (
        <Flex
            borderColor={activeBorder ? 'black' : null}
            borderWidth={activeBorder ? "small" : null}
            borderTopWidth={activeBorder ? 'large' : null}
            borderStyle={activeBorder ? 'solid' : null}
            py={activeBorder ? ['large', null, 'xxlarge'] : null}
            px={activeBorder ? ['medium', null, 'large'] : null}
            flexDirection={['column', 'row']} textAlign={['center', 'left']} alignItems="center" mb="large">
            {imageUrl &&
            <Box mb='medium'
                 borderRadius="rounded"
                 width={['100px', null, 1 / 4]}
                 minWidth="100px"
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
            }
            <Box pl={[null, 'medium']}>
                {name &&
                <Heading level={4} mb="0">{name}</Heading>
                }
                {role &&
                <Paragraph fontSize="body" fontStyle="italic" lineHeight="body" level={5}>{role}</Paragraph>
                }
                {description &&
                <Paragraph>{description}</Paragraph>
                }
            </Box>
        </Flex>
    )
}