import React from 'react'
import { FullSliderItem } from './full-slider-item'
import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export const FullSlider = ({ items }) => {
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
      {items.map((node, i) => {
        return <FullSliderItem key={i} {...node} />
      })}
    </SlickSlider>
  )
}
