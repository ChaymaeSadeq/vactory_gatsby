// Listing.
export const params = {
  page: {
    limit: 9,
    offset: 0,
  },
  sort: "-created",
  fields: {
    "node--events":
      "drupal_internal__nid,langcode,title,path,body,field_vactory_date_interval,field_vactory_media_image,field_vactory_excerpt,field_vactory_taxonomy_1,field_vactory_taxonomy_2",
    "media--image": "thumbnail",
    "file--image": "uri",
    "taxonomy_term--events_category": "name",
    "taxonomy_term--events_cities": "name",
  },
  include:
    "field_vactory_media_image,field_vactory_media_image.thumbnail,field_vactory_taxonomy_1,field_vactory_taxonomy_2",
};
