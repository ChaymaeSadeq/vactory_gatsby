// Listing.
export const params = {
  page: {
    limit: 9,
    offset: 0,
  },
  sort: "-created",
  fields: {
    "node--glossary":
      "drupal_internal__nid,langcode,title,path,field_body,field_vactory_taxonomy_1,field_vactory_title",
    "taxonomy_term--glossary_secteur": "name",
  },
  include:
    "field_vactory_taxonomy_1",
};
