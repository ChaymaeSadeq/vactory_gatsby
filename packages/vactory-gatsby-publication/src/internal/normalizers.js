import get from "lodash.get";
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const normalizeNodes = (nodes) => {
  return nodes.map((post) => ({
    id: post.drupal_internal__nid,
    title: post.title,
    url: get(post, "path.alias", "#."),
    excerpt: truncate(stripHtml(get(post, 'field_vactory_excerpt.processed', '')), 100),
    category: get(post, "field_vactory_taxonomy_1.name", null),
    image: get(post, "field_vactory_media_image.thumbnail.uri.value", null),
    file: get(post, 'field_vactory_media_file.field_media_document.uri.value._default', null),
    date: get(post, "field_vactory_date", null),
  }));
};

export const normalizeDFNodes = (nodes, excerptLimit = 100) => {
  console.log(nodes);
  return nodes.map((post) => ({
    id: post.id,
    title: post.title,
    url: get(post, "url", "#."),
    excerpt: truncate(stripHtml(get(post, 'excerpt', '')), excerptLimit),
    category: get(post, "category.label", null),
    image: get(post, "image", null),
    file: get(post, 'file._default', null),
    date: get(post, "date.html_date", null),
  }));
};

export const normalizeTerms = (terms) => {
  return terms.map((term) => ({
    id: term.drupal_internal__tid,
    name: term.name,
  }));
};
