import React from "react";
import {ChiffreCle} from "./chiffreCle";
import {Box, Row, Col, Slider, NextArrow, PrevArrow} from 'vactory-ui';
import {useRtl} from "vactory-gatsby-core";
import {TemplateWrapper} from '../../composants'
import { withTheme } from 'styled-components';

export const appendDots = dots => <Box
    as="ul"
    __css={{
        bottom: 'auto',
        display: 'block',
        listStyle: 'none',
        textAlign: 'center',
        padding: 0,
        margin: '1rem auto 0',

        '& > li' : {
            position: 'relative',
            display: 'inline-block',
            margin: '0 5px',
            width: '12px',
            height: '12px',
            cursor: 'pointer',
        },

        '& > li > button' : {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            outline: 0,
            borderRadius: '50%',
            backgroundColor: 'transparent',
            textIndent: '-999em',
            cursor: 'pointer',
            position: 'absolute',
            border: '1px solid',
            borderColor: 'primary500',
            padding: 0,
        },
        '& > li > button::after' : {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width:' 100%',
            height: '100%',
            visibility: 'hidden',
            background: 'primary500',
            borderRadius: '50%',
            boxShadow: '0 0 1px #02afbc',
            opacity: 0,
            transform:' scale(2.5)',
            transition: 'opacity .3s ease, transform .3s ease, visibility 0s .3s',
        },
        '& > li.slick-active > button::after' :{
            visibility: 'visible',
            opacity: 1,
            backgroundColor: 'black',
            transform: 'scale(1.5)',
            transition: 'opacity .3s ease,transform .3s ease',
        }
    }}
>{dots}</Box>

export const ChiffreCleSlider = withTheme(({items, theme}) => {
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
        <Slider {...settings} mx={['0', null, 'xxlarge', 'xxxlarge']}>
            {items.map((item, index) => {
                return (
                    <Box key={index} px='xsmall'>
                        <ChiffreCle {...item} />
                    </Box>
                )
            })}

        </Slider>
    )
});

export const ChiffreCleWrapper = ({bigTitle, intro, colCount, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.length <= colCount &&
            <>
                <Box display={items.length > 1 ? ['none', null, 'block'] : null}>
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
                {items.length > 1 &&
                <Box display={['block', null, 'none']}>
                    <ChiffreCleSlider items={items}/>
                </Box>
                }
            </>
            }
            {items.length > colCount &&
            <ChiffreCleSlider items={items}/>
            }
        </TemplateWrapper>
    )
}
