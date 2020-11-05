import React from "react";
import {FullBackgroundSlider} from "./fullBackgroundSlider";
import {Slider, Slide, NextArrow, PrevArrow, appendDots} from 'vactory-ui'
import {theme} from "../../vactory-gatsby-ui/theme";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const FullBackgroundSliderWrapper = ({bigTitle, intro, items}) => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '0px',
        centerMode: false,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

        responsive: [
            {
                breakpoint: theme.breakpoints.md,
                settings: {
                    centerPadding: '40px',
                    centerMode: true,
                    arrows: false,
                    dots: true,
                    dotsClass: 'slick-dots',
                    appendDots: appendDots
                },

            }
        ]
    }

    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Slider {...settings} afterChange={index => setActiveSlide(index)}>
                {items.map((item, index) => {
                    return (
                        <Slide
                            key={index}
                            isActive={activeSlide === index}
                            bgImage={item.imageUrl._default}
                            content={<FullBackgroundSlider cta_text={item.cta_text} cta_url={item.cta_url}
                                                           title={item.title} description={item.description}/>}
                        />
                    )
                })}
            </Slider>
        </TemplateWrapper>
    )

}