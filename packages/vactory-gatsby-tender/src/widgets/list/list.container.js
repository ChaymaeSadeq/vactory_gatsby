import React from 'react'
import get from 'lodash.get';
import {PostsContainer} from 'vactory-gatsby-tender'

export const ListContainer = ({data}) => {
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const pageCount = get(data, 'components.0.views.data.count', 0);

    return <PostsContainer nodes={nodes} pageCount={pageCount}/>
};
