import React from "react";
import get from 'lodash.get';
import {ContenuInlineRowsWrapper} from "./contenuInlineRowsWrapper";

export const ContenuInlineRowsContainer = ({data}) => {
    const intro = get(data, 'extra_field.intro')
    const bigTitle = get(data, "extra_field.bigTitle")
    const inversed = get(data, "extra_field.group_options.inversed")
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
        <ContenuInlineRowsWrapper bigTitle={bigTitle} intro={intro} items={items} inversed={inversed} />
    )
}