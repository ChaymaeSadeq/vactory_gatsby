import React from "react";
import Slider from "react-slick";
import {ContenuColonneImage} from "./contenuColonneImage";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {useRtl} from "vactory-gatsby-core";

export const appendDots = dots => <ul
    className="dots-style"
>{dots}</ul>

const imageStyles2Cols = {
    sizes: [
        {
            name: "decoupled_image_466_262",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 466,
    height: 262,
    ratio: 466 / 262
};
const imageStyles3Cols = {
    sizes: [
        {
            name: "decoupled_image_354_200",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 354,
    height: 200,
    ratio: 354 / 200
};
const imageStyles4Cols = {
    sizes: [
        {
            name: "decoupled_image_252_142",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 252,
    height: 142,
    ratio: 252 / 142
};


export const ContenuColonneImageWrapper = ({bigTitle, intro, colCount, centercontent, activeBorder, items}) => {
    let imageStyles = imageStyles2Cols
    if (colCount === 3) {
        imageStyles = imageStyles3Cols
    } else if (colCount === 4) {
        imageStyles = imageStyles4Cols
    }

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
                                        <ContenuColonneImage imageStyles={imageStyles} {...item}
                                                             activeBorder={activeBorder}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {items.length > 1 &&
                <div className={"block md:hidden"}>
                    <ContenuColonnesSlider imageStyles={imageStyles} slidetoShow={colCount} items={items}/>
                </div>
                }
            </>
            }
            {items.length > colCount &&
            <ContenuColonnesSlider imageStyles={imageStyles} slidetoShow={colCount} items={items}/>
            }
        </TemplateWrapper>
    )
}

const ContenuColonnesSlider = ({items, slidetoShow, imageStyles, theme}) => {
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
                    <div key={index} className="p-2">
                        <ContenuColonneImage imageStyles={imageStyles} {...item} />
                    </div>
                )
            })}

        </Slider>
    )
};
