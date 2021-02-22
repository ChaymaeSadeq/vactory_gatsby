import React from "react";
import { ChiffreCle } from "./chiffreCle";
import Slider from "react-slick";
import {useRtl} from "vactory-gatsby-core";
import {TemplateWrapper} from '../../composants'
import './dots-style.css';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const appendDots = dots => <ul
    className="dots-style"
>{dots}</ul>

export const ChiffreCleSlider = ({items}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        nextArrow: <div><button type="button" className="ltr:right-0 rtl:left-0 border border-black rounded-md text-base text-black px-1">Next</button></div>,
        prevArrow: <div><button type="button" className="ltr:left-0 rtl:right-0 border border-black rounded-md text-base text-black px-1">Prev</button></div>,
        dotsClass: 'slick-dots',
        appendDots: appendDots,
        responsive: [
            {
                breakpoint: 768,
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
                    <div key={index} className="p-3">
                        <ChiffreCle {...item} />
                    </div>
                )
            })}

        </Slider>
    )
};

export const ChiffreCleWrapper = ({bigTitle, intro, colCount, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.length <= colCount &&
            <>
                <div className={items.length > 1 ? "hidden md:block" : null}>
                    <div className="flex">
                        {items.map((item, index) => {
                            return (
                                <div className={`w-full sm:w-1/2 md:w-1/${colCount}`} key={index}>
                                    <ChiffreCle{...item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {items.length > 1 &&
                <div className={"block md:hidden"}>
                    <ChiffreCleSlider items={items}/>
                </div>
                }
            </>
            }
            {items.length > colCount &&
            <ChiffreCleSlider items={items}/>
            }
        </TemplateWrapper>
    )
}
