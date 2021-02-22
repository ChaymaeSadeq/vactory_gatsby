import React from 'react'
import get from 'lodash.get'
import { Wysiwyg } from 'vactory-gatsby-ui'
import { ServiceCards } from './service-cards'

export const ServiceCardsContainer = ({ data }) => {
  const intro = get(data, 'extra_field.intro.value.#text', null)
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
    <div className="my-10">
			<div className="text-center">
				{intro && (
					<div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            <Wysiwyg html={intro} />
					</div>
				)}
			</div>
			<div className="mt-12">
        <ServiceCards items={items} />
			</div>
		</div>
  )
}
