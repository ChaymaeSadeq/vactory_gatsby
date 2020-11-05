import React from "react";
import {Box, Paragraph, Heading} from 'vactory-ui'
import {Picture} from "vactory-gatsby-ui";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_60_60",
            media: "(min-width: 768px)"
        },
        {
            name: "decoupled_image_60_60",
            media: "(max-width: 767px)"
        }
    ],
    width: 60,
    height: 60,
    ratio: 60 / 60
};

const ChiffreCss = {
    fontSize: ['40px', null, '50px'],
    lineHeight: ['40px', null, '50px'],
    color: 'black',
    fontWeight: "black",
}

export const ChiffreCle = ({number, word_before, word_after, description, imageUrl, image_alt}) => {
    return (
        <Box sx={{
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 'small',
            borderTopWidth: 'large',
            py: 'large',
            px: 'small',
            textAlign: 'center',
        }}>
            <Box>
                {imageUrl &&
                <Box width={imageStyles.width} mx="auto" mb="medium">
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
                {(word_before || word_after || number) &&
                <Paragraph sx={ChiffreCss}>
                    {word_before &&
                    <Paragraph sx={ChiffreCss} as="span">
                        {word_before}
                    </Paragraph>
                    }
                    {number &&
                    <Paragraph sx={ChiffreCss} mx='xxsmall' as="span">{number}</Paragraph>
                    }
                    {word_after &&
                    <Paragraph sx={ChiffreCss} as="span">
                        {word_after}
                    </Paragraph>
                    }
                </Paragraph>
                }
            </Box>
            {description &&
            <Heading level="3" fontSize="heading5">{description}</Heading>
            }
        </Box>
    )
}