import React from "react";
import {Box, Heading, Button as Permalink} from "vactory-ui";
import { Wysiwyg, Picture } from 'vactory-gatsby-ui'


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

const Encadre = ({sx, children, ...rest}) => {
    return (<Box sx={sx} __css={{
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 'small',
        borderTopWidth: 'large',
        px: 'medium',
        py: 'xlarge',
        marginBottom: 'medium',
    }}>
        {children}
    </Box>)
}


export const ContenuColonneEncadre = ({title, description, cta_url, cta_text, pictoImg, image_alt}) => {
    return (
        <Encadre>
            {pictoImg &&
                <Box mx='auto' mb="medium" width={imageStyles.width} height={imageStyles.height}>
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
            {title &&
            <Heading level={3}>{title}</Heading>
            }
            {description &&
            <Wysiwyg html={description} />
            }
            {(cta_text && cta_url) &&
            <Permalink>{cta_text}</Permalink>
            }
        </Encadre>
    )
}