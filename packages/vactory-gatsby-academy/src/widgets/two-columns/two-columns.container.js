import React from 'react'
import get from 'lodash.get'
import { Box, Heading, Button } from 'vactory-ui'
import { Wysiwyg } from 'vactory-gatsby-ui'
import { Link } from 'vactory-gatsby-ui'
import { TwoColumns } from 'vactory-gatsby-academy'
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const TwoColumnsContainer = ({ data }) => {
  const title = get(data, 'components.0.title', '')
  const raw_description = get(data, 'components.0.description.value.#text', null)
  const description = <Wysiwyg html={raw_description} />
  const link = get(data, 'components.0.link.url', null)
  const link_label = get(data, 'components.0.link.title', '')
  const posts = data.data.map((post) => {
    return {
      ...post,
        excerpt: truncate(stripHtml(get(post, 'excerpt.0.value', '')), 200),
      duration: get(post, 'duration.0.value', null),
      date: get(post, 'date.0.value', null),
    }
  })

  return (
    <Box mb='30px'>
      <Box sx={{ 'text-align': 'center' }}>
        <Heading level={2}>{title}</Heading>
        {raw_description.length > 0 && <div>{description}</div>}
      </Box>
      <TwoColumns posts={posts} />
      <Box sx={{ 'text-align': 'center' }}>
        {link && (
          <Button as={Link} to={link}>
            {link_label}
          </Button>
        )}
      </Box>
    </Box>
  )
}
