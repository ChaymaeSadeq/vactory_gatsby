import get from 'lodash.get';

export const normalizeNodes = (nodes) => {
  
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        dateInterval: get(post,'field_vactory_date_interval', null),
        excerpt: get(post, 'field_vactory_excerpt.processed', null),
        category: get(post, 'field_vactory_taxonomy_1.name', null),
        city: get(post, 'field_vactory_taxonomy_2.name', null),
        image: get(post, 'field_vactory_media_image.thumbnail.uri.value', null)
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
