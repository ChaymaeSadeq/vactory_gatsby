import React from 'react'
import get from 'lodash.get'
import { Wysiwyg } from 'vactory-gatsby-ui'
import { ServiceCards } from './service-cards'

export const ServiceCardsContainer = ({ data }) => {
  const title = get(data, 'extra_field.title',  null)
  const intro = get(data, 'extra_field.intro.value.#text', null)
  const cards = data.components.map((item) => ({
      ...item,
      title: get(item, 'title', null),
      image: get(item, 'image.0._default', null),
      link: get(item, 'link.url', null),
      link_label: get(item, 'link.title', null),
    })
  )

  return <ServiceCards
    title={title}
    intro={intro && <Wysiwyg html={intro} />}
    cards={cards}
    />
}
