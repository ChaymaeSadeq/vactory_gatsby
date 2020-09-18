import React from 'react'
import get from 'lodash.get'
import { Wysiwyg } from 'vactory-gatsby-ui'
import { ServiceCards } from './service-cards'
import { Box } from 'vactory-ui'

export const ServiceCardsContainer = ({ data }) => {
  const raw_intro = get(data, 'extra_field.intro.value.#text', null)
  const intro = <Wysiwyg html={raw_intro} />
  const items = data.components.map((item) => {
    return {
      ...item,
      title: get(item, 'title', null),
      image: get(item, 'image.0._default', null),
      link: get(item, 'link.url', null),
      link_label: get(item, 'link.title', null),
    }
  })

  return (
    <Box mb="30px">
      <Box sx={{ 'text-align': 'center' }}>
        {raw_intro.length > 0 && <div>{intro}</div>}
      </Box>
      <ServiceCards items={items} />
    </Box>
  )
}
