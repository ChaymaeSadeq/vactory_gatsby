import React from 'react'
import get from 'lodash.get'
import { Wysiwyg } from 'vactory-gatsby-ui'
import {stripHtml, truncate} from 'vactory-gatsby-core'
import {EventsSection} from './slider';

const formatDate = (dateString) => {
  const options = {day: '2-digit', month: 'short'}
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', options)
}

export const SliderContainer = ({data}) => {
    const title = get(data, 'components.0.title', '')
    const intro = get(data, 'components.0.description.value.#text', null)
    const action = {
      href: get(data, 'components.0.link.url', null),
      label: get(data, 'components.0.link.title', ''),
    }
    const events = data.data.map((post) => {
      return {
        ...post,
        date: {
          start: formatDate(get(post, 'dateInterval.0.value', null)),
          end: formatDate(get(post, 'dateInterval.0.end_value', null)),
        },
        excerpt: truncate(stripHtml(get(post, 'excerpt.0.value', '')), 100),
        image: get(post, 'image._default', null),
    }
  })

  return <EventsSection
    title={title}
    intro={ intro && <Wysiwyg html={intro} /> }
    action={action}
    events={events} />
};
