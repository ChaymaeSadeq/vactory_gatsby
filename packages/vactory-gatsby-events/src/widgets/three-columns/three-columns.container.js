import React from 'react'
import get from 'lodash.get'
import { Box, Heading, Button } from 'vactory-ui'
import { Wysiwyg } from 'vactory-gatsby-ui'
import { Link } from 'vactory-gatsby-ui'
import { ThreeColumns } from 'vactory-gatsby-events'

export const ThreeColumnsContainer = ({ data }) => {
  const title = get(data, 'components.0.title', '')
  const raw_description = get(data, 'components.0.description.value.#text', null)
  const description = <Wysiwyg html={raw_description} />
  const url = get(data, 'components.0.link.url', null)
  const splitArr = url.split('/')
  const link = splitArr[splitArr.length - 1]
  const link_label = get(data, 'components.0.link.title', '')
  const posts = data.data.map((post) => {
    return {
      ...post,
      excerpt: get(post, 'excerpt.0.value'),
      dateInterval: get(post, 'dateInterval.0', null),
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