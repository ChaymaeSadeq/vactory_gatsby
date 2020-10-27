import React from "react";
import {Wysiwyg} from 'vactory-gatsby-ui'
import styled, {css} from "styled-components";
import {Col, Row, Image, Box, Heading, Button as Permalink} from "vactory-ui";


const StyledRow = styled(Row)`
    ${props => props.inversed === true && css`
        flex-direction: row-reverse;
    `}
    ${props => props.inversed === false && css`
        flex-direction: row;
    `}
`

export const ContenuInline = ({imgUrl, title, description, cta_text, cta_url, colImage, activeBorder, activeBorderImage, inversed}) => {
    return (
        <Box
            p={activeBorder ? ["small", "small", "xlarge"] : 'inherit'}
            borderStyle={activeBorder ? 'solid' : 'none'}
            borderWidth={activeBorder ? 'medium' : 'none'}
            borderColor={activeBorder ? 'black' : 'none'}
        >
            <StyledRow alignItems="center" inversed={inversed}>
                {imgUrl &&
                <Col xs={12} sm={4} md={colImage}
                >
                    <Box mb={['medium', "0px"]} p={activeBorderImage ? ['small', 'large'] : ''}
                         borderStyle={activeBorderImage ? 'solid' : 'none'}
                         borderColor={activeBorderImage ? 'black' : 'none'}
                         borderWidth={activeBorderImage ? 'medium' : 'none'}
                    >
                        <Image src={imgUrl} width={[1]}/>
                    </Box>
                </Col>
                }
                <Col xs={12} sm={5} md={12 - colImage}>
                    <Box>
                        {title &&
                        <Heading level={3}>{title}s</Heading>
                        }
                        {description &&
                        <Wysiwyg html={description}/>
                        }
                        {(cta_text && cta_url) &&
                        <Box>
                            <Permalink>{cta_text}</Permalink>
                        </Box>
                        }
                    </Box>
                </Col>
            </StyledRow>
        </Box>
    )
}