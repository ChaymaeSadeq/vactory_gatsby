// Listing.
export const params = {
    page: {
        limit: 9,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--forum": "drupal_internal__nid,changed,langcode,title,path,body,field_vactory_taxonomy_1,field_vactory_media_document,field_vactory_paragraphs,field_forum_editeur,field_forum_expert,internal_user",
        "media--document": "thumbnail",
        "taxonomy_term--forum_section": "name",
    },
    include: "field_vactory_taxonomy_1,field_vactory_media_document,field_vactory_media_document.thumbnail,field_forum_editeur,field_forum_expert"
};
