import React from "react";
import {Box, Heading, Image, Button as Permalink} from "vactory-ui";
import { Wysiwyg } from 'vactory-gatsby-ui'

export const ContenuColonneImage = ({title, description, cta_url, cta_text, pictoImg, activeBorder}) => {
    return (
        <Box mb="large" padding={activeBorder? "xlarge" : "inherit"}
             borderStyle={activeBorder ? 'solid' : 'none'}
             borderColor={activeBorder ? 'black' : 'none'}
             borderWidth={activeBorder ? 'medium' : 'none'}
        >
            {pictoImg &&
            <Image src={pictoImg} mb="medium" width="100%"/>
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