import React from "react";
import styled, {css} from "styled-components";
import {Box, Heading, Button as Permalink, Row, Col, greaterThan} from "vactory-ui";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'

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


const StyledRow = styled(Row)`
    text-align: ${props => props.textAlign};
    margin-left: 0;
    margin-right: 0;
     ${props => props.activeBorder && css`
        &:not(:last-child) {
            border-bottom: 6px solid black;
        }
     `}
    ${props => !props.inversed && css`
        flex-direction: row-reverse;
    `}
    ${props => props.inversed && css`
        flex-direction: row;
    `}
`

const ColImg = styled(Col)`
    padding: 0;
    ${props => greaterThan('md')`
        ${props => (props.inversed && props.activeBorder) && css`
            border-right: 6px solid black;
        `}  
    `
}
`
const ColContent = styled(Col)`
    padding: 30px;    
    ${props => greaterThan('md')`
        ${props => (!props.inversed && props.activeBorder) && css`
            border-right: 6px solid black;
        `}
    `
}
`


export const ContenuMosaique = ({imgUrl, image_alt, title, description, cta_text, cta_url, textAlign, inversed, activeBorder}) => {

    return (
        <StyledRow textAlign={textAlign} inversed={inversed} activeBorder={activeBorder}>
            {imgUrl &&
            <ColImg xs={12} sm={12} md={6}
                    p="0"
                    inversed={inversed}
                    activeBorder={activeBorder}>
                <Picture
                    file={imgUrl}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </ColImg>
            }
            <ColContent xs={12} sm={12} md={6}
                        inversed={inversed} activeBorder={activeBorder}
                        display="flex !important"
                        flexDirection="column"
                        justifyContent="center">
                {title &&
                <Heading level={4}>{title}</Heading>
                }
                {description &&
                <Wysiwyg html={description}/>
                }
                {(cta_text && cta_url) &&
                <Box>
                    <Permalink>{cta_text}</Permalink>
                </Box>
                }
            </ColContent>
        </StyledRow>
    )
}
