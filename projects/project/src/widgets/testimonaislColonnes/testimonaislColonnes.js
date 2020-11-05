import React from "react";
import {Box, Flex, Paragraph, Heading} from 'vactory-ui'
import {Picture, Wysiwyg} from "vactory-gatsby-ui";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_100_100",
            media: "(min-width: 0px)"
        },
    ],
    width: 100,
    height: 100,
    ratio: 100 / 100
};

export const TestimonaislColonnes = ({imageUrl, image_alt, name, role, description, inversed}) => {
    return (
        <Flex
            mb="large"
            borderWidth="medium"
            borderStyle="solid"
            borderColor="black"
            py="xlarge"
            px="large"
            backgroundColor="white"
            flexDirection={inversed ? 'column-reverse' : 'column'}
        >
            <Flex alignItems="center" mb={!inversed ? "medium" : null} mt={inversed ? "medium" : null}>
                {imageUrl &&
                <Box width={imageStyles.width}
                     borderRadius="rounded"
                     overflow="hidden"
                     sx={{position: "relative"}}
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
                {(name || role) &&
                <Box pl="medium">
                    {name &&
                    <Heading mb={0} level={4}>{name}</Heading>
                    }
                    {role &&
                    <Paragraph mb={0} fontSize="body" fontStyle="italic" lineHeight="body" level={5}>{role}</Paragraph>
                    }
                </Box>
                }

            </Flex>
            {description &&
            <Box>
                <Wysiwyg html={description}/>
            </Box>
            }

        </Flex>
    )
}