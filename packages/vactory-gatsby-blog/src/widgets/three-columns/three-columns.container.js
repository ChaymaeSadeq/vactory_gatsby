import React from 'react'
import get from 'lodash.get'
import { Box, Heading, Button } from 'vactory-ui'
import { Wysiwyg } from 'vactory-gatsby-ui'
import { Link } from 'vactory-gatsby-ui'
import { ThreeColumns } from 'vactory-gatsby-blog'
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const ThreeColumnsContainer = ({ data }) => {
  const title = get(data, 'components.0.title', '')
  const raw_description = get(data, 'components.0.description.value.#text', null)
  const description = <Wysiwyg html={raw_description} />
  const link = get(data, 'components.0.link.url', null)
  const link_label = get(data, 'components.0.link.title', '')
  const posts = data.data.map((post) => {
    return {
      ...post,
        excerpt: truncate(stripHtml(get(post, 'excerpt.0.value', '')), 100),
    }
  })

  return (
    <Box mb='30px'>
      <Box sx={{ 'text-align': 'center' }}>
        <Heading level={2}>{title}</Heading>
        {raw_description.length > 0 && <div>{description}</div>}
      </Box>
      <ThreeColumns posts={posts} />
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
