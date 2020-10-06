export const params = {
  page: {
    limit: 9,
    offset: 0,
  },
  sort: "-created",
  fields: {
    "node--tender":
    "drupal_internal__nid,langcode,title,path,body,field_vactory_date,field_vactory_excerpt,field_vactory_media_file,field_vactory_media_document,field_vactory_name,internal_node_banner",
  },
  include:
    "field_vactory_media_file,field_vactory_media_document",
};
