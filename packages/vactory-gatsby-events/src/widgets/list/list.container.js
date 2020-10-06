import React from 'react'
import get from 'lodash.get';
import {PostsContainer} from 'vactory-gatsby-events'

export const ListContainer = ({data}) => {
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const pageCount = get(data, 'components.0.views.data.count', 0);
    const categories = get(data, 'components.0.views.data.exposed.events_category', []);
    const cities = get(data, 'components.0.views.data.exposed.events_cities', []);

    return <PostsContainer
        nodes={nodes}
        categories={categories}
        cities={cities}
        pageCount={pageCount}
    />
};
