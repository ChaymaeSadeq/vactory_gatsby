import React from "react";
import {Box, Heading} from "vactory-ui";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {LinkUrl} from "../../composants/link-url";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_60_60",
            media: "(min-width: 0px)"
        },
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


export const ContenuColonneEncadre = ({title, description, pictoImg, image_alt, link}) => {
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
            <Wysiwyg html={description}/>
            }
            {(link) &&
                <LinkUrl outline="primary" {...link} />
            }
        </Encadre>
    )
}