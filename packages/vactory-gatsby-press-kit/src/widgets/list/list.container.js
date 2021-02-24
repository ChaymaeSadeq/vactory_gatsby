import React from 'react'
import {PostsContainer} from 'vactory-gatsby-press-kit'

export const ListContainer = ({data}) => {
    const nodes = data?.components?.[0]?.views?.data?.nodes || [];
    const pageCount = data?.components?.[0]?.views?.data?.count || 0;
    const terms = data?.components?.[0]?.views?.data?.exposed?.press_kit_theme || [];

    return <PostsContainer nodes={nodes} terms={terms} pageCount={pageCount}/>
};
