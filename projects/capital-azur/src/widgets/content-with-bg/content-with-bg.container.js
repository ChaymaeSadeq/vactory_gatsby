import React from 'react'
import get from 'lodash.get'
import {ContentWithBg} from "./content-with-bg";
import { Wysiwyg } from 'vactory-gatsby-ui'

export const ContentWithBgContainer = ({data}) => {
    const items = {}
    items.title = get(data, 'components.0.title', '')
    const raw_description = get(data, 'components.0.description.value.#text', null)
    items.description = <Wysiwyg html={raw_description} />
    items.link = get(data, 'components.0.link.url', null)
    items.link_label = get(data, 'components.0.link.title', '')
    items.image = get(data, 'components.0.image.0._default', null)
    
    return <ContentWithBg {...items}/>
};
