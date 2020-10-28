import React from "react";
import {Box, Heading, Button as Permalink} from "vactory-ui";
import { Wysiwyg } from 'vactory-gatsby-ui'
import {Picture} from "vactory-gatsby-ui";

// @todo: à adapter selon colCount. Maybe move this imageStyles to .container.js file.
const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_354_200",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 354,
    height: 200,
    ratio: 354 / 200
};

export const ContenuColonneImage = ({title, description, cta_url, cta_text, pictoImg, pictoImg_alt, activeBorder}) => {
    return (
        <Box mb="large" padding={activeBorder? "xlarge" : "inherit"}
             borderStyle={activeBorder ? 'solid' : 'none'}
             borderColor={activeBorder ? 'black' : 'none'}
             borderWidth={activeBorder ? 'medium' : 'none'}
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
