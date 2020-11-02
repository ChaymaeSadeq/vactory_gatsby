import React from "react";
import {ChiffreCle} from "./chiffreCle";
import {Box, Heading, Paragraph, Row, Col, Slider, NextArrow, PrevArrow, theme, appendDots} from 'vactory-ui';

export const ChiffreCleWrapper = ({bigTitle, intro, colCount, items}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        nextArrow: <NextArrow color="black"/>,
        prevArrow: <PrevArrow color="black"/>,
        dotsClass: 'slick-dots',
        appendDots: appendDots,
        responsive: [
            {
                breakpoint: theme.breakpoints.md,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '20px',
                    centerMode: true,
                    arrows: false,
                    dots: true,
                    dotsClass: 'slick-dots',
                    appendDots: appendDots,
                },

            }
        ]
    }
    return (
        <Box>
            {(bigTitle || intro) &&
            <Box mb={30}>
                {bigTitle &&
                <Heading level={2}>{bigTitle}</Heading>
                }
                {intro &&
                <Paragraph fontSize="title" lineHeight="title">{intro}</Paragraph>
                }
            </Box>
            }
            {items.length <= colCount &&
            <>
                <Box display={['none', null, 'block']}>
                    <Row>
                        {items.map((item, index) => {
                            return (
                                <Col key={index} xs={12} sm={6} md={12 / colCount}>
                                    <ChiffreCle{...item} />
                                </Col>
                            )
                        })}
                    </Row>
                </Box>
                <Box display={['block', null, 'none']}>
                    <Slider {...settings} mx='0'>
                        {items.map((item, index) => {
                            return (
                                <Box key={index} px='15px'>
                                    <ChiffreCle key={index} {...item} />
                                </Box>
                            )
                        })}

                    </Slider>
                </Box>
            </>
            }
            {items.length > colCount &&
            <Slider {...settings} mx='55px'>
                {items.map((item, index) => {
                    return (
                        <Box key={index} px='15px'>
                            <ChiffreCle key={index} {...item} />
                        </Box>
                    )
                })}
            </Slider>
            }
        </Box>
    )
}