import React from 'react'
import get from 'lodash.get';
import {PostsContainer} from 'vactory-gatsby-blog'

export const ListContainer = ({data}) => {
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const pageCount = get(data, 'components.0.views.data.count', 0);
    const terms = get(data, 'components.0.views.data.exposed.blog_category', []);

    return <PostsContainer nodes={nodes} terms={terms} pageCount={pageCount}/>
};
