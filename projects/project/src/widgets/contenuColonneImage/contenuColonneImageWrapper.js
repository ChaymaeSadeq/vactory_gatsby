import React from "react";
import {Col, Row, Slider, NextArrow, PrevArrow, appendDots, Box} from "vactory-ui";
import {ContenuColonneImage} from "./contenuColonneImage";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {useRtl} from "vactory-gatsby-core";
import {theme} from "../../vactory-gatsby-ui/theme";


export const ContenuColonneImageWrapper = ({bigTitle, intro, colCount, centercontent, activeBorder, items}) => {
    const contentTextAlignClass = centercontent ? "center" : "left"
    const number_cols = 12 / colCount
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.length <= colCount &&
            <>
                <Box display={(items.length > 1) ? ['none', null, 'block'] : null}>
                    <Row>
                        {
                            items.map((item, index) => {
                                return (
                                    <Col key={index} xs={12} sm={6} md={number_cols} textAlign={contentTextAlignClass}>
                                        <ContenuColonneImage {...item} activeBorder={activeBorder}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Box>
                {items.length > 1 &&
                <Box display={['block', null, 'none']}>
                    <ContenuColonnesSlider slidetoShow={colCount} items={items}/>
                </Box>
                }
            </>
            }
            {items.length > colCount &&
            <ContenuColonnesSlider slidetoShow={colCount} items={items}/>
            }
        </TemplateWrapper>
    )
}

const ContenuColonnesSlider = ({items, slidetoShow}) => {
    const isRtl = useRtl()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: parseInt(slidetoShow),
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
                        <ContenuColonneImage {...item} />
                    </Box>
                )
            })}

        </Slider>
    )
}