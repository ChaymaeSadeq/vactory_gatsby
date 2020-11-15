import React from "react";
import {Flex, Box, Heading, Paragraph} from 'vactory-ui'
import {Picture, Wysiwyg} from "vactory-gatsby-ui";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 0px)"
        },
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200

}

export const TestimonialsInline = ({imageUrl, image_alt, name, description, role, inversed}) => {
    const classRowInversed = inversed ? 'row-reverse' : 'row'
    return (
        <Flex flexDirection={['column', null, classRowInversed]} py="large" alignItems="center">
            <Box minWidth={imageStyles.width} width={imageStyles.width} mx={['auto', null, '0']}
                 borderRadius="rounded"
                 overflow="hidden"
                 sx={{position: "relative"}}
                 mb={['medium', null, '0px']}
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
            <Box
                paddingRight={inversed ? [null, null, 'xxlarge', 'xxxlarge'] : null}
                paddingLeft={!inversed ? [null, null, 'xxlarge', 'xxxlarge'] : null}>
                {description &&
                <Wysiwyg html={description}/>
                }
                {(role || name) &&
                <Box>
                    {name &&
                    <Heading mb={0} level={4}>{name}</Heading>
                    }
                    {role &&
                    <Paragraph mb={0} fontSize="body" fontStyle="italic" lineHeight="body">{role}</Paragraph>
                    }
                </Box>
                }
            </Box>
        </Flex>
    )
}
