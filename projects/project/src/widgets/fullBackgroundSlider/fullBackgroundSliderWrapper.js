import React from "react";
import {FullBackgroundSlider} from "./fullBackgroundSlider";
import {Slider, Slide, NextArrow, PrevArrow, appendDots, Box} from 'vactory-ui'
import {theme} from "../../vactory-gatsby-ui/theme";

//@todo: set backgrond video/video After update factory-ui
export const FullBackgroundSliderWrapper = ({items}) => {
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
        <Box>
            <Slider {...settings} afterChange={index => setActiveSlide(index)}>
                {items.map((item, index) => {
                    return (
                        <Slide
                            key={index}
                            isActive={activeSlide === index}
                            bgImage={!item.videoId ? item.imageUrl._default : null}
                            videoId={item.videoId}
                            content={<FullBackgroundSlider isActive={activeSlide === index} cta_text={item.cta_text} cta_url={item.cta_url}
                                                           title={item.title} description={item.description}/>}
                        />
                    )
                })}
            </Slider>
        </Box>
    )

}