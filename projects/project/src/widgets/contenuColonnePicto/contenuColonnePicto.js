import React from "react";
import {Wysiwyg} from 'vactory-gatsby-ui'
import {Box, Heading, Image, Button as Permalink} from "vactory-ui"


export const ContenuColonnePicto = ({title, description, cta_url, cta_text, pictoImg}) => {
    return (
        <Box mb={20}>
            {pictoImg &&
            <Image src={pictoImg} width="60px"/>
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