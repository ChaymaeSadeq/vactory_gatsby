import get from 'lodash.get';

export const normalizeNodes = (nodes) => {
    console.log('TONORMALIZE', nodes)
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        //category: get(post, 'field_vactory_taxonomy_1.name', null),
        excerpt: get(post, 'field_vactory_excerpt.processed', null),
        views: get(post, 'field_forum_views_count', null),
        status: get(post, 'field_forum_status', null),
        contributions: get(post, 'comment.comment_count', null),
        last_contribution: get(post, 'comment.last_comment_timestamp', null)
    }));
};

export const normalizeDFNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.id,
        title: post.title,
        url: get(post, 'url', null),
        excerpt: get(post, 'excerpt', null),
        views: get(post, 'views', null),
        status: get(post, 'status', null),
        contributions: get(post, 'contributions', null),
        last_contribution: get(post, 'last_contribution', null)
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
