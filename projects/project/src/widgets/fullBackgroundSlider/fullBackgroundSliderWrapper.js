import React from "react";
import Slider from "react-slick";
import {FullBackgroundSlider} from "./fullBackgroundSlider";


export const appendDots = dots => <ul
    className="dots-style"
>{dots}</ul>

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
        nextArrow: <div><button type="button" className="absolute z-10 ltr:right-2 rtl:left-2 border border-black rounded-md text-base text-black px-1">Next</button></div>,
        prevArrow: <div><button type="button" className="absolute z-10 ltr:left-2 rtl:right-2 border border-black rounded-md text-base text-black px-1">Prev</button></div>,

        responsive: [
            {
                breakpoint: 768,
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
        <div>
            <Slider {...settings} afterChange={index => setActiveSlide(index)}>
                {items.map((item, index) => {
                    return (
                        <div className="w-full py-56 text-center bg-gray-500" style={{backgrondImage: `url(${!item.videoId ? item.imageUrl._default : null || ""})`}}>
                            <FullBackgroundSlider key={index} isActive={activeSlide === index} cta_text={item.cta_text} cta_url={item.cta_url}
                                                            title={item.title} description={item.description}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )

}
