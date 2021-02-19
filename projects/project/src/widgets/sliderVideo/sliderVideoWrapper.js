import React from "react";
import Slider from "react-slick";
import Glide from "@glidejs/glide";
import {SliderVideo} from "./sliderVideo";

import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";

const appendDots = dots => <ul className="dots-style">{dots}</ul>

export const e  = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
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
                },

            }
        ]
    }
    return (
        <Slider {...settings}>
            {items.map((item, index) => {
                return (
                    <div key={index} className="mx-3">
                        <SliderVideo {...item} />
                    </div>
                )
            })}

        </Slider>
    )
}


export const SliderVideoWrapper = ({items}) => {
	const glideRef = React.useRef(null);

	React.useEffect(() => {
		const glide = new Glide(glideRef.current).mount();
		console.log(glide);
	}, []);

	return (
		<div className="mt-12 pb-12 relative max-w-lg lg:max-w-2xl sm:mx-auto overflow-hidden">
			<svg
				className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100"
				width={640}
				height={784}
				fill="none"
				viewBox="0 0 640 784"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
						x={118}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect
							x={0}
							y={0}
							width={4}
							height={4}
							className="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					y={72}
					width={640}
					height={640}
					className="text-gray-50"
					fill="currentColor"
				/>
				<rect
					x={118}
					width={404}
					height={784}
					fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
				/>
			</svg>

			<div className="glide" ref={glideRef}>
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{items.map((item, i) => (
							<li key={i} className="glide__slide">
								<SliderVideo {...item} />
							</li>
						))}
					</ul>
				</div>
				<div className="glide__bullets" data-glide-el="controls[nav]">
					{items.map((_, index) => (
						<button
							key={index}
							className="glide__bullet"
							data-glide-dir={`=${index}`}
						/>
					))}
				</div>
				<div className="glide__arrows" data-glide-el="controls">
					<button
						className="glide__arrow glide__arrow--left"
						data-glide-dir="<"
					>
						prev
					</button>
					<button
						className="glide__arrow glide__arrow--right"
						data-glide-dir=">"
					>
						next
					</button>
				</div>
			</div>
		</div>
	);
};