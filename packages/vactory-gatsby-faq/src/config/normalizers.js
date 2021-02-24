import get from 'lodash.get';

export const normalizeNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        questions: get(post, 'field_questions', []),
    }));
};

export const normalizeDFNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.id,
        title: post.title,
        questions: get(post, 'questions', [])
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
