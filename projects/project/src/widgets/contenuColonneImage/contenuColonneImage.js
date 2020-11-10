import React from "react";
import {Box, Heading, Button as Permalink} from "vactory-ui";
import { Wysiwyg } from 'vactory-gatsby-ui'
import {Picture} from "vactory-gatsby-ui";

export const ContenuColonneImage = ({title, description, cta_url, cta_text, pictoImg, pictoImg_alt, activeBorder, imageStyles}) => {
    return (
        <Box mb="large" padding={activeBorder? "xlarge" : "inherit"}
             borderStyle={activeBorder ? 'solid' : 'none'}
             borderColor={activeBorder ? 'black' : 'none'}
             borderWidth={activeBorder ? 'medium' : 'none'}
             height="100%"
        >
            {pictoImg &&
            <Box mb="medium">
                <Picture
                    file={pictoImg}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                    alt={pictoImg_alt}
                    className="card-image"
                />
            </Box>
            }
            {title  &&
            <Heading level={3}>{title}</Heading>
            }
            {description &&
                <Wysiwyg html={description} />
            }
            {(cta_text && cta_url) &&
            <Permalink>{cta_text}</Permalink>
            }
        </Box>
    )
}
