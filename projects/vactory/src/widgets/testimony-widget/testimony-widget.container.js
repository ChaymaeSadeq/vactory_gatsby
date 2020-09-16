import React from 'react'
import {TestimonyWidget} from "./testimony-widget";
import get from "lodash.get";
import { Wysiwyg } from 'vactory-gatsby-ui'

export const TestimonyWidgetContainer = ({data}) => {
    const items = {}
    items.title = get(data, 'components.0.title', null);
    items.role = get(data, 'components.0.role', null);
    items.name = get(data, 'components.0.name', null);
    const raw_description = get(data, 'components.0.description.value.#text', null)
    items.description = <Wysiwyg html={raw_description} />
    items.image = get(data, 'components.0.image.0._default', null);
    
    return <TestimonyWidget {...items}/>
};
