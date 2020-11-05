import React from "react";
import {Flex, Heading, Button} from 'vactory-ui'
import {Wysiwyg} from "../../utilites";

export const FullBackgroundSlider = ({title, description, cta_text, cta_url}) => {
    return (
        <Flex height="100%" flexDirection="column" justifyContent="center" alignItems="center" mx="auto" maxWidth="500px">
            {title &&
            <Heading color="white" level={3}>{title}</Heading>
            }
            {description &&
            <Wysiwyg color="white" html={description}/>
            }
            {(cta_url && cta_text) &&
            <Button href={cta_url}>{cta_text}</Button>
            }
        </Flex>
    )
}