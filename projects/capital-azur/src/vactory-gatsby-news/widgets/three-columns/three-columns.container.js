import React from 'react'
import get from 'lodash.get';
import {Wysiwyg} from "vactory-gatsby-ui";
import {stripHtml, truncate} from 'vactory-gatsby-core'
import {ThreeColumns} from './three-columns'

export const ThreeColumnsContainer = ({data}) => {
    const title = get(data, 'components.0.title', '');
    const intro = get(data, 'components.0.description.value.#text', null);
    const link = {
        href: get(data, 'components.0.link.url', null),
        label: get(data, 'components.0.link.title', ''),
    };
    const posts = data.data.map(post => {
        return {
            ...post,
            date: get(post, 'date.0.value', null),
            excerpt: truncate(stripHtml(get(post, 'excerpt.0.value', '')), 100),
            image_url: get(post, 'image._default', null)
        }
    });

    return <ThreeColumns
        title={title}
        intro={intro && <Wysiwyg html={intro}/>}
        posts={posts}
        action={link}
    />
}
