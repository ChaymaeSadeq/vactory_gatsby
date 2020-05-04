// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--press_kit": "drupal_internal__nid,langcode,title,path,field_vactory_meta_tags,created,field_vactory_excerpt,field_vactory_media_image,field_vactory_date,field_vactory_media_file,field_vactory_taxonomy_1",
        "media--image": "thumbnail",
        "file--image": "uri",
        "taxonomy_term--press_kit_theme": "name",
    },
    include: "field_vactory_media_image,field_vactory_media_image.thumbnail,field_vactory_taxonomy_1,field_vactory_media_file",
};
