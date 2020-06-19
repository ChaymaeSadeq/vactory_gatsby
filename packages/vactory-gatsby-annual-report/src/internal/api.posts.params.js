// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--vactory_annual_report": "drupal_internal__nid,langcode,title,path,metatag_normalized,created,field_vactory_excerpt,field_vactory_media_image,field_vactory_date,field_vactory_taxonomy_2,field_vactory_paragraphs,field_ar_element_width,field_ar_layout,field_vactory_taxonomy_1,body",
        "media--image": "thumbnail",
        "file--image": "uri",
        "taxonomy_term--vactory_ar_thematic": "name",
        "taxonomy_term--vactory_ar_media_type": "name",
    },
    include: "field_vactory_media_image,field_vactory_media_image.thumbnail,field_vactory_taxonomy_1,field_vactory_taxonomy_2,field_vactory_paragraphs",
};
