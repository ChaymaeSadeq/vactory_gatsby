// Listing.
export const params = {
    page: {
        limit: 4,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--job_ads": "drupal_internal__nid,langcode,title,path,body,field_vactory_address,field_vactory_description,field_vactory_email,metatag_normalized,field_vactory_telephone,field_vactory_taxonomy_1,field_vactory_taxonomy_2,field_vactory_taxonomy_3",
        "taxonomy_term--job_ads_city": "name",
        "taxonomy_term--job_ads_contract": "name",
        "taxonomy_term--job_ads_profession": "name",
    },
    include: "field_vactory_taxonomy_1,field_vactory_taxonomy_2,field_vactory_taxonomy_3",
};
