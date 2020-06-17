// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--press_release": "drupal_internal__nid,langcode,title,path,metatag_normalized,created,field_vactory_excerpt,field_vactory_media,field_vactory_date,field_vactory_media_file,field_vactory_taxonomy_1",
        "media--image": "thumbnail",
        "file--image": "uri",
        "media--document": "name,field_media_document",
        "file--document": "uri",
        "taxonomy_term--press_release_theme": "name",
    },
    include: "field_vactory_media,field_vactory_media.thumbnail,field_vactory_taxonomy_1,field_vactory_media_file,field_vactory_media_file.field_media_document",
};
