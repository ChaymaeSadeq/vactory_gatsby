import React from 'react'
import { CardEvents, imageLayoutStyles } from 'vactory-gatsby-events'
import { default as SlickSlider } from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const StyledSlickSlider = styled(SlickSlider)`
  /*.slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }*/
  .slick-dots {
    position: relative;
    bottom: inherit;
  }
`

export const Slider = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <StyledSlickSlider {...settings}>
      {posts.map((node, i) => {
        return (
          <CardEvents
            key={i}
            {...node}
            imageSettings={imageLayoutStyles.twoColumns}
          />
        )
      })}
    </StyledSlickSlider>
  )
}
