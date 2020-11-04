import React from "react"
import {StructuredDataSchema} from "vactory-gatsby-core";

/**
 * Structured data for post page.
 *
 * @param headline
 * @param datePublished
 * @param imageURL
 * @returns {*}
 * @constructor
 */
export const PostSchema = ({headline, datePublished, imageURL}) => {
    const data = {
        '@context': 'http://schema.org',
        '@type': 'NewsArticle',
        'headline': headline,
        'datePublished': datePublished,
        'image': [imageURL],
    };
    return <StructuredDataSchema data={data}/>
};
