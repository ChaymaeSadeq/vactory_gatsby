import get from 'lodash.get';

export const normalizeNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        comment: get(post, 'comment.last_comment_name', null),
        courseSupport: get(post, 'field_vactory_media_document', null),
        date: get(post, 'field_vactory_date', null),
        duration: get(post, 'field_vactory_academy_duration', null),
        instructor: get(post, 'field_vactory_instructor.display_name', null),
        language: get(post, 'field_vactory_academy_language', null),
        excerpt: get(post, 'field_vactory_excerpt.processed', null),
        category: get(post, 'field_vactory_taxonomy_1.name', null),
        image: get(post, 'field_vactory_media_image.thumbnail.uri.value', null),
        video: get(post, 'field_vactory_youtube_videos', null),
    }));
};

export const normalizeDFNodes = (nodes) => {
    return nodes.map(post => ({
        id: post.id,
        title: post.title,
        url: get(post, 'url', null),
        // comment: get(post, 'comment.last_comment_name', null),
        // courseSupport: get(post, 'field_vactory_media_document', null),
        date: get(post, 'field_vactory_date', null),
        duration: get(post, 'duration', null),
        // instructor: get(post, 'field_vactory_instructor.display_name', null),
        // language: get(post, 'field_vactory_academy_language', null),
        excerpt: get(post, 'excerpt', null),
        category: get(post, 'category', null),
        image: get(post, 'image', null),
        // video: get(post, 'field_vactory_youtube_videos', null),
    }));
};

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
