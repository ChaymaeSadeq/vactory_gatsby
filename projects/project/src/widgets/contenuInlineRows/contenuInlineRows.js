import React from "react";
import {Flex, Box, Heading, Link, Image} from 'vactory-ui';
import {Wysiwyg} from "vactory-gatsby-ui";

export const ContenuInlineRows = ({pictoImg, title, cta_text, cta_url, description, inversed}) => {
    const inversedClass = inversed ? 'row-reverse' : 'row'
    return (
        <Flex flexDirection={['column', 'column', inversedClass]} alignItems="center"
              py="medium"
              sx={{
                  borderBottomStyle: 'solid',
                  borderBottomWidth: 'small',
                  borderBottomColor: 'black',
              }}
        >
            {pictoImg &&
            <Box
                pr={!inversed ? 'medium' : '0'}
                pl={inversed ? 'medium' : '0'}
                maxWidth="200px">
                <Image src={pictoImg}/>
            </Box>
            }
            {(title || description) &&
            <Box
                pr={!inversed ? 'medium' : '0'}
                pl={inversed ? 'medium' : '0'}
                flex={1}>
                {title &&
                <Heading level='4'>{title}</Heading>
                }
                {description &&
                <Wysiwyg html={description}/>
                }
            </Box>
            }
            {(cta_text && cta_url) &&
            <Box>
                <Link sx={{
                    whiteSpace: 'nowrap',
                }} outline="primary" borderRadius="rounded" href={cta_url}>{cta_text}</Link>
            </Box>
            }

        </Flex>
    )
}