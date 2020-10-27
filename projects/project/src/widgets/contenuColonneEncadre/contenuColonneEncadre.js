import React from "react";
import {Box, Heading, Image, Button as Permalink} from "vactory-ui";
//import { Wysiwyg, Picture } from 'vactory-gatsby-ui'
import { Wysiwyg } from 'vactory-gatsby-ui'


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


export const ContenuColonneEncadre = ({title, description, cta_url, cta_text, pictoImg}) => {
    return (
        <Encadre>
            {pictoImg &&
            <Image src={pictoImg} width="60px"/>
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