import React from "react";
import get from 'lodash.get'
import {ContenuMosaiquedWrapper} from "./contenuMosaiquedWrapper";

export const ContenuMosaiqueContainer = ({data}) => {
    const centercontent = get(data, 'extra_field.centercontent')
    const activeBorder = get(data, 'extra_field.activeBorder')
    const intro = get(data, 'extra_field.intro')
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
        <ContenuMosaiquedWrapper centercontent={centercontent}
                          intro={intro}
                          bigTitle={bigTitle}
                          activeBorder={activeBorder}
                          items={items}/>
    )
}
