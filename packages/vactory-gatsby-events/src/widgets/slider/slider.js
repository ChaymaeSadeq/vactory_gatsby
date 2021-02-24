import React from 'react'
import { EventCard, imageLayoutStyles } from 'vactory-gatsby-events'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Slider = ({ posts }) => {
  const settings = {
    appendDots: dots => <ul style={{position: 'relative', bottom: 0}}>{dots}</ul>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
		<SlickSlider {...settings}>
			{posts.map((node, i) => {
				return (
					<EventCard
						key={i}
						{...node}
						imageSettings={imageLayoutStyles.twoColumns}
					/>
				);
			})}
		</SlickSlider>
  );
}
