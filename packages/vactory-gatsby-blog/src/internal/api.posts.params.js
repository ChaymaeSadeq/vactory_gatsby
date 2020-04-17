// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--blog": "drupal_internal__nid,langcode,title,path,created,field_vactory_excerpt,field_vactory_media_image,field_vactory_taxonomy_1",
        "file--image": "uri",
        "taxonomy_term--blog_category": "name",
    },
    include: "field_vactory_media_image,field_vactory_media_image.thumbnail,field_vactory_taxonomy_1",
};
