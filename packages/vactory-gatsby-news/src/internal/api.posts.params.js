// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--vactory_news": "drupal_internal__nid,langcode,title,path,created,field_vactory_excerpt,field_vactory_media_image,field_vactory_taxonomy_1,field_vactory_date",
        "media--image": "thumbnail",
        "file--image": "uri",
        "taxonomy_term--vactory_news_theme": "name",
    },
    include: "field_vactory_media_image,field_vactory_media_image.thumbnail,field_vactory_taxonomy_1",
};
