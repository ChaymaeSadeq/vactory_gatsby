import get from "lodash.get";

export const normalizeNodes = (nodes) => {
  return nodes.map((post) => ({
    id: post.drupal_internal__nid,
    title: post.title,
    url: get(post, "path.alias", "#."),
    date: get(post, "field_vactory_date", null),
    excerpt: get(post, "field_vactory_excerpt.processed", null),
    reference: get(post, "field_vactory_name", null),
    invitation: get(
      post,
      "field_vactory_media_file.field_media_document.uri.value._default",
      null
    ),
  }));
};
