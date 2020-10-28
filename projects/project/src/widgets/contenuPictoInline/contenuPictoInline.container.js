import React from "react";
import get from 'lodash.get'
import {ContenuPictoInlineWrapper} from "./contenuPictoInlineWrapper";

export const ContenuPictoInlineContainer = ({data}) => {
    const centercontent = get(data, 'extra_field.group_options.centercontent') ? 'center' : 'left';
    const intro = get(data, 'extra_field.intro')
    const colCount = get(data, "extra_field.group_options.colCount")
    const bigTitle = get(data, "extra_field.bigTitle")
    const items = data.components.map((item) => {
        return {
            title: get(item, "title"),
            description: get(item, "description.value.#text"),
            cta_text: get(item, "link.title"),
            cta_url: get(item, "link.url"),
            imgUrl: get(item, "imgUrl.0"),
            image_alt: get(item, 'pictoImg_alt'),
        }
    })
    return (
        <ContenuPictoInlineWrapper colCount={colCount} centercontent={centercontent} bigTitle={bigTitle}
                                   intro={intro} items={items}
        />
    )
}
