import React from 'react'
import get from 'lodash.get';
import {PostsContainer} from 'vactory-gatsby-forum'
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const ListContainer = ({data}) => {
  console.log(data)

    const pageCount = get(data, 'components.0.data_count', 0);

    let components = {}
    components.title = get(data, 'components.0.title', '')
    components.link = get(data, 'components.0.link.url', null)
    components.link_label = get(data, 'components.0.link.title', '')
    components.show_link = get(data, 'components.0.show_link', null)
    components.is_listing = get(data, 'components.0.is_listing', null)

    const posts = data.data.nodes.map((post) => {
        return {
          ...post,
          excerpt: truncate(stripHtml(get(post, "excerpt.0.value", "")), 200),
        };
      })

    return (
      <PostsContainer
        components={components}
        nodes={posts}
        pageCount={pageCount}
      />
    );
};
