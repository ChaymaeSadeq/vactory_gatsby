import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {Col, Row, Box, Heading, Button as Permalink} from "vactory-ui";
import {TemplateWrapper} from "../../composants/template-wrapper";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_459_258",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 459,
    height: 258,
    ratio: 459 / 258
};

export const ContenuInline = ({imgUrl, image_alt, title, description, cta_text, cta_url, colImage, activeBorder, activeBorderImage, inversed}) => {
    return (
        <TemplateWrapper>
            <Box
                p={activeBorder ? ["small", "small", "xlarge"] : '0'}
                borderStyle={activeBorder ? 'solid' : 'none'}
                borderWidth={activeBorder ? 'medium' : 'none'}
                borderColor={activeBorder ? 'black' : 'none'}
            >
                <Row alignItems="center" sx={{
                    flexDirection: inversed ? 'row-reverse' : 'row'
                }}>
                    {imgUrl &&
                    <Col xs={12} sm={4} md={colImage}
                    >
                        <Box mb={['medium', "0px"]} p={activeBorderImage ? ['small', 'large'] : ''}
                             borderStyle={activeBorderImage ? 'solid' : 'none'}
                             borderColor={activeBorderImage ? 'black' : 'none'}
                             borderWidth={activeBorderImage ? 'medium' : 'none'}
                        >
                            <Picture
                                file={imgUrl}
                                alt={image_alt}
                                sizes={imageStyles.sizes}
                                width={imageStyles.width}
                                height={imageStyles.height}
                                ratio={imageStyles.ratio}
                            />
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
                </Row>
            </Box>
        </TemplateWrapper>
    )
}