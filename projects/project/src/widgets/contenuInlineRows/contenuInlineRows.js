import React from "react";
import {Flex, Box, Heading, Link} from 'vactory-ui';
import {Wysiwyg, Picture} from "vactory-gatsby-ui";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 768px)"
        }
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200
};

export const ContenuInlineRows = ({pictoImg, title, cta_text, cta_url, description, inversed, image_alt}) => {
    const inversedClass = inversed ? 'row-reverse' : 'row'
    return (
        <Flex flexDirection={['column', 'column', inversedClass]} alignItems="center"
              py="medium"
              sx={{
                  borderBottomStyle: 'solid',
                  borderBottomWidth: 'small',
                  borderBottomColor: 'black',
              }}
        >
            {pictoImg &&
            <Box
                pr={!inversed ? 'medium' : '0'}
                pl={inversed ? 'medium' : '0'}
                mb={['medium', '0']}
                width="200px">
                <Picture
                    file={pictoImg}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                    alt={image_alt}
                />
            </Box>
            }
            {(title || description) &&
            <Box
                pr={!inversed ? 'medium' : '0'}
                pl={inversed ? 'medium' : '0'}
                flex={1}>
                {title &&
                <Heading level='4'>{title}</Heading>
                }
                {description &&
                <Wysiwyg html={description}/>
                }
            </Box>
            }
            {(cta_text && cta_url) &&
            <Box>
                <Link sx={{
                    whiteSpace: 'nowrap',
                }} outline="primary" borderRadius="rounded" href={cta_url}>{cta_text}</Link>
            </Box>
            }

        </Flex>
    )
}