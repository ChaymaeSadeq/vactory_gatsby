import React from 'react'
import get from 'lodash.get'
import { FullSlider } from './full-slider'

export const FullSliderContainer = ({ data }) => {
    const slides = data.components.map((item) => {
        return {
            ...item,
            description: get(item, 'description', null),
            image: get(item, 'image.0._default', null),
            link: get(item, 'link.url', null),
            link_label: get(item, 'link.title', null),
        }
    })

  return (
      <FullSlider slides={slides} />
  )
}
