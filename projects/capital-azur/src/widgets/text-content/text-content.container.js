import React from 'react';
import get from 'lodash.get';
import { Wysiwyg } from 'vactory-gatsby-ui';
import {TextContent} from './text-content';


export const TextContentContainer = ({data}) => {

    const items = {}
    const raw_description = get(data, 'components.0.description.value.#text', null)
    items.description = <Wysiwyg html={raw_description} />

    return (
        <div>
            <TextContent {...items}/>
        </div>
    )
}