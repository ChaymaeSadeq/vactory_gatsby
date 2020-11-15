import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {Box, Flex, Heading} from "vactory-ui";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_100_100",
            media: "(min-width: 0px)",
        }
    ],
    width: 100,
    height: 100,
    ratio: 100 / 100
}

export const ContenuPictoInline = ({imgUrl, image_alt, title, description, centercontent}) => {
    return (
        <Flex flexDirection={['column', 'row']} mb="small" alignItems={centercontent ? 'center' : 'flex-start'}>
            {imgUrl &&
            <Box width={imageStyles.width} mb={['medium', '0']} mx={['auto', '0']}>
                <Picture
                    file={imgUrl}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </Box>
            }
            <Box paddingLeft={15}>
                {title &&
                <Heading level={4}>{title}</Heading>
                }
                {description &&
                <Wysiwyg html={description}/>
                }
            </Box>
        </Flex>
    )
}