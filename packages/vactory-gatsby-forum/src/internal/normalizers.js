import get from 'lodash.get';
import * as moment from "moment"
import 'moment/locale/fr';
import 'moment/locale/ar';


export const normalizeNodes = (nodes) => {
    console.log('TONORMALIZE', nodes)
    return nodes.map(post => ({
        id: post.drupal_internal__nid,
        title: post.title,
        url: get(post, 'path.alias', '#.'),
        excerpt: get(post, 'field_vactory_excerpt.processed', null),
        views: get(post, 'field_forum_views_count', null),
        status: get(post, 'field_forum_status', null),
        contributions: get(post, 'comment.comment_count', null),
        last_contribution: get(post, 'comment.last_comment_timestamp', null)
    }));
};

export const normalizeDate = (lang, date) => {
  moment.locale(lang);
  return moment(date, "X").format("D MMMM YYYY HH:mm");
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

export const normalizeNode = (post) => {
    console.log('NODE', post)
    return {
      id: post.id,
      nid: post.drupal_internal__nid,
      title: post.title,
      url: get(post, 'path.alias', '#.'),
      body: get(post, 'body.processed', null),
      comment: get(post, 'comment.last_comment_name', null),
      forum_expert: get(post, 'internal_user.field_forum_expert', null),
      excerpt: get(post, 'field_vactory_excerpt.processed', null),
      category: get(post, 'field_vactory_taxonomy_1.name', null),
    }
  }

export const normalizeTerms = (terms) => {
    return terms.map(term => ({
        id: term.drupal_internal__tid,
        name: term.name
    }));
};
