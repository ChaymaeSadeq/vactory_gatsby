// Listing.
export const params = {
    page: {
        limit: 9,
        offset: 0,
    },
    sort: "-created",
    fields: {
        "node--faq": "drupal_internal__nid,title,field_questions",
    },
};
