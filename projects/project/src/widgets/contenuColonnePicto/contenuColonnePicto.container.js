import React from "react";
import get from 'lodash.get'
import {ContenuColonnePictoWrapper} from "./contenuColonnePictoWrapper";

export const ContenuColonnePictoContainer = ({data}) => {
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
            pictoImg: get(item, "pictoImg.0._default"),
        }
    })

    return (
        <ContenuColonnePictoWrapper items={items} intro={intro} bigTitle={bigTitle} colCount={colCount} centercontent={centercontent} />
    )
}
