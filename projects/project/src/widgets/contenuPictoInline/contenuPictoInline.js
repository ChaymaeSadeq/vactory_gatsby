import React from "react";
import {Wysiwyg} from 'vactory-gatsby-ui'
import {Box, Flex, Image, Heading} from "vactory-ui";

export const ContenuPictoInline = ({imgUrl, title, description, centercontent}) => {
    return (
        <Flex flexDirection={['column', 'row']} mb="small" alignItems={centercontent ? 'center' : 'flex-start'}>
            {imgUrl &&
            <Box sx={{maxWidth: '100px'}} mx={['auto', '0']}>
                <Image src={imgUrl}/>
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