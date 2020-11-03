import React from "react";
import {ChiffreCle} from "./chiffreCle";
import {Box, Row, Col, Slider, NextArrow, PrevArrow, appendDots} from 'vactory-ui';
import {theme} from "../../vactory-gatsby-ui/theme";
import {useRtl} from "vactory-gatsby-core";
import {TemplateWrapper} from '../../composants'

export const ChiffreCleSlider = ({items}) => {
    const isRtl = useRtl()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        nextArrow: !isRtl ? <NextArrow color="black"
                                       sx={{right: ['calc((100% - 960px)/2 + 10px)', null, 'calc((100% - 760px)/2 + 10px)', 'calc((100% - 960px)/2 + 10px)', 'calc((100% - 1140px)/2 + 10px)']}}/> :
            <NextArrow color="black"
                       sx={{left: ['calc((100% - 960px)/2 + 10px)', null, 'calc((100% - 760px)/2 + 10px)', 'calc((100% - 960px)/2 + 10px)', 'calc((100% - 1140px)/2 + 10px)']}}/>,
        prevArrow: !isRtl ? <PrevArrow color="black"
                                       sx={{left: ['calc((100% - 960px)/2 + 10px)', null, 'calc((100% - 760px)/2 + 10px)', 'calc((100% - 960px)/2 + 10px)', 'calc((100% - 1140px)/2 + 10px)']}}/> :
            <PrevArrow color="black"
                       sx={{right: ['calc((100% - 960px)/2 + 10px)', null, 'calc((100% - 760px)/2 + 10px)', 'calc((100% - 960px)/2 + 10px)', 'calc((100% - 1140px)/2 + 10px)']}}/>,
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
        <Slider {...settings} mx={['0', null, '55px']}>
            {items.map((item, index) => {
                return (
                    <Box key={index} px='15px'>
                        <ChiffreCle key={index} {...item} />
                    </Box>
                )
            })}

        </Slider>
    )
}

export const ChiffreCleWrapper = ({bigTitle, intro, colCount, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
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
                    <ChiffreCleSlider items={items}/>
                </Box>
            </>
            }
            {items.length > colCount &&
            <ChiffreCleSlider items={items}/>
            }
        </TemplateWrapper>
    )
}