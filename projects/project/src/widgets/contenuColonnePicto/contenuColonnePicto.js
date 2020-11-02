import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {Box, Heading, Button as Permalink} from "vactory-ui"

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

export const ContenuColonnePicto = ({title, description, cta_url, cta_text, pictoImg, image_alt}) => {
    return (
        <Box mb={20}>
            {pictoImg &&
            <Box width={imageStyles.width} mx="auto">
                <Picture
                    file={pictoImg}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </Box>
            }
            {title &&
            <Heading level={3}>{title}</Heading>
            }
            {description &&
            <Wysiwyg html={description}/>
            }
            {(cta_text && cta_url) &&
            <Permalink>{cta_text}</Permalink>
            }
        </Box>
    )
}