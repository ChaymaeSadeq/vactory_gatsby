// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--academy": "drupal_internal__nid,langcode,title,path,body,field_vactory_excerpt,field_vactory_taxonomy_1,field_vactory_media_image,comment,field_vactory_academy_duration,field_vactory_academy_language,field_vactory_date,field_vactory_meta_tags,field_vactory_youtube_videos,field_vactory_instructor,field_vactory_media_document,field_vactory_paragraphs",
        "media--image": "thumbnail",
        "file--image": "uri",
        "media--document": "thumbnail",
        "taxonomy_term--academy_themes": "name",
    },
    include: "field_vactory_media_image,field_vactory_media_image.thumbnail,field_vactory_taxonomy_1,field_vactory_instructor,field_vactory_media_document,field_vactory_media_document.thumbnail,field_vactory_paragraphs",
};