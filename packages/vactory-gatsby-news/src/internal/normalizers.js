import get from 'lodash.get';
import {stripHtml} from 'vactory-gatsby-core'

export const normalizeNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        excerpt: stripHtml(get(post, 'field_vactory_excerpt.processed', '')),
        category: get(post, 'field_vactory_taxonomy_1.name', null),
        image: get(post, 'field_vactory_media_image.thumbnail.uri.value', null)
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
