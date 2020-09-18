import React from 'react'
import get from 'lodash.get'
import {Content} from "./content";
import { Wysiwyg } from 'vactory-gatsby-ui'

export const ContentContainer = ({data}) => {
    const items = {}
    items.title = get(data, 'components.0.title', '')
    const raw_description = get(data, 'components.0.description.value.#text', null)
    items.description = <Wysiwyg html={raw_description} />
    items.link = get(data, 'components.0.link.url', null)
    items.link_label = get(data, 'components.0.link.title', '')
    
    return <Content {...items}/>
};
