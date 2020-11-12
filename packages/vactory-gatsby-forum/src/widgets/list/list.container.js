import React from 'react'
import get from 'lodash.get';
import {List} from './list'
import { Box, Heading, Button } from 'vactory-ui'
import { Link } from 'vactory-gatsby-ui'
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const ListContainer = ({data}) => {
    console.log('DATA', data)
    const title = get(data, 'components.0.title', '')
    const link = get(data, 'components.0.link.url', null)
    const link_label = get(data, 'components.0.link.title', '')
    const show_link = get(data, 'components.0.show_link', null)
    const posts = data.data.map((post) => {
        return {
          ...post,
          excerpt: truncate(stripHtml(get(post, "excerpt.0.value", "")), 200),
        };
      })

    return (
      <Box mb="30px">
        <Box >
          <Heading level={2}>{title}</Heading>
        </Box>
        <List posts={posts} />
        <Box >
          {show_link && link && (
            <Button as={Link} to={link}>
              {link_label}
            </Button>
          )}
        </Box>
      </Box>
    );
};
