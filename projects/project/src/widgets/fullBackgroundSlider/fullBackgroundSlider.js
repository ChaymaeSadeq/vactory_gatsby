import React from "react";
import {Flex, Heading, Button, Box, MotionBox} from 'vactory-ui'
import {Wysiwyg} from "../../utilites";

export const FullBackgroundSlider = ({title, description, cta_text, cta_url, isActive}) => {
    return (
        <Flex height="100%" flexDirection="column" justifyContent="center" alignItems="center" mx="auto"
              maxWidth="500px">
            <MotionBox textAlign="center" animate={isActive ? 'show' : 'hide'} initial='hide'
                       transition={{ease: "easeOut", duration: .5}}
                       variants={{show: {opacity: 1, y: 0}, hide: {opacity: 0, y: 100}}}>
                {title &&
                <Heading color="white" level={3}>{title}</Heading>
                }
                {description &&
                <Box color="white">
                    <Wysiwyg html={description}/>
                </Box>
                }
                {(cta_url && cta_text) &&
                <Button href={cta_url}>{cta_text}</Button>
                }
            </MotionBox>
        </Flex>
    )
}
