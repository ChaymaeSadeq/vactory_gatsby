import React from 'react'
import { GovernorCard } from "vactory-gatsby-gouvernance";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageLayoutStyles } from "vactory-gatsby-gouvernance";

export const Slider = ({posts}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        appendDots: dots => <ul style={{position: 'relative', bottom: 0}}>{dots}</ul>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
		<SlickSlider {...settings}>
			{posts.map((node) => {
				return (
					<div key={node.key} className="px-2">
						<GovernorCard
							{...node}
							imagesettings={imageLayoutStyles.slider}
						/>
					</div>
				);
			})}
		</SlickSlider>
	);
};
