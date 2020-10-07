import React from 'react'
import { GouvernanceWidget } from './gouvernance-widget'
import get from 'lodash.get'
import { Wysiwyg } from 'vactory-gatsby-ui'

export const GouvernanceWidgetContainer = ({ data }) => {
  // console.log(data)
  const extra_field = {}
  const raw_intro = get(data, 'extra_field.intro.value.#text', null)
  extra_field.intro = <Wysiwyg html={raw_intro} />
  extra_field.link = get(data, 'extra_field.link.url', null)
  extra_field.linkLabel = get(data, 'extra_field.link.title', null)

  const fields = data.components.map((field) => {
    return {
      link: get(field, 'link.url', null),
      link_label: get(field, 'link.title', null),
      image: get(field, 'image.0._default', null),
      title: get(field, 'title', null),
    }
  })

  return <GouvernanceWidget extra_field={extra_field} fields={fields} />
}
