import get from 'lodash.get';

export const normalizeNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        TitleCard: get(post, 'field_vactory_title', null),
        excerpt:get(post, 'field_body.processed', null),
        category: get(post, 'field_vactory_taxonomy_1.name', null),
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
