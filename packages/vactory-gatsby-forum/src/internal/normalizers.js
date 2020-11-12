import get from 'lodash.get';

export const normalizeNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        category: get(post, 'field_vactory_taxonomy_1.name', null),
        //image: get(post, 'field_vactory_media.thumbnail.uri.value', null),
    }));
};

export const normalizeDFNodes = (nodes) => {
    console.log(nodes)
    return nodes.map(post => ({
        id: post.id,
        title: post.title,
        url: get(post, 'url', null),
        // comment: get(post, 'comment.last_comment_name', null),
        // courseSupport: get(post, 'field_vactory_media_document', null),
        excerpt: get(post, 'excerpt', null),
        category: get(post, 'section.label', null),
        views: get(post, 'views', null),
        status: get(post, 'status', null),
        
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
