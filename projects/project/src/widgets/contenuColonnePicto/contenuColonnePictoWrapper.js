import React from "react";
import Slider from "react-slick";
import {ContenuColonnePicto} from "./contenuColonnePicto";
import {TemplateWrapper} from "../../composants/template-wrapper";

const appendDots = dots => <ul className="dots-style">{dots}</ul>

const ContenuColonnePictoSlider = ({items, slidetoShow}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: parseInt(slidetoShow),
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
        <div className="md:mt-5 lg:mt-6">
            <Slider {...settings}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className="mx-3">
                            <ContenuColonnePicto {...item} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export const ContenuColonnePictoWrapper = ({items, colCount, centercontent, bigTitle, intro}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.length <= colCount &&
            <>
                <div className={items.length > 1 ? "hidden md:block" : null}>
                    <div className="flex">
                        {
                            items.map((item, index) => {
                                return (
                                    <div className={`px-1 w-full sm:w-1/2 md:w-1/${colCount} ${centercontent ? "text-center": ""}`} key={index}>
                                        <ContenuColonnePicto {...item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {items.length > 1 &&
                <div className={"block md:hidden"}>
                    <ContenuColonnePictoSlider slidetoShow={colCount} items={items}/>
                </div>
                }
            </>
            }
            {items.length > colCount &&
                <ContenuColonnePictoSlider slidetoShow={colCount} items={items} />
            }
        </TemplateWrapper>
    )
}

