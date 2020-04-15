// Node detail.
export const nodeNewsParams = {
    fields: {
        "node--vactory_news": "drupal_internal__nid,langcode,title,path,field_vactory_meta_tags,created,field_vactory_excerpt,field_vactory_media,field_vactory_news_theme,body,node_banner_image,node_banner_mobile_image,node_banner_title,node_banner_icon,node_banner_hide_title,node_banner_hide_icon,field_contenu_lie,node_parallax",
        "file--image": "uri",
        "taxonomy_term--vactory_news_theme": "name",
    },
    include: "field_vactory_media,field_vactory_media.thumbnail,field_vactory_news_theme,node_banner_image,node_banner_mobile_image,node_banner_image.thumbnail,node_banner_mobile_image.thumbnail",
};

// Listing.
export const nodesNewsParams = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--vactory_news": "drupal_internal__nid,langcode,title,path,created,field_vactory_excerpt,field_vactory_media,field_vactory_news_theme",
        "file--image": "uri",
        "taxonomy_term--vactory_news_theme": "name",
    },
    include: "field_vactory_media,field_vactory_media.thumbnail,field_vactory_news_theme",
};

// Taxonomies
export const taxonomyNewsParams = {
    fields: {
        "taxonomy_term--vactory_news_theme": "drupal_internal__tid,name",
    }
}
