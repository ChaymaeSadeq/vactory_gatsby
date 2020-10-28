import React from "react";
import get from 'lodash.get'
import {ContenuColonneImageWrapper} from './contenuColonneImageWrapper'

export const ContenuColonneImageContainer = ({data}) => {
    const centercontent = get(data, 'extra_field.group_options.centercontent')
    const intro = get(data, 'extra_field.intro')
    const colCount = get(data, "extra_field.group_options.colCount")
    const bigTitle = get(data, "extra_field.bigTitle")
    const activeBorder = get(data, "extra_field.group_options.activeBorder")
    const items = data.components.map((item) => {
        return {
            title: get(item, "title"),
            description: get(item, "description.value.#text"),
            cta_text: get(item, "link.title"),
            cta_url: get(item, "link.url"),
            pictoImg: get(item, "pictoImg.0"),
            pictoImg_alt: get(item, 'pictoImg_alt')
        }
    })

    return (
        <ContenuColonneImageWrapper bigTitle={bigTitle}
                          intro={intro}
                          colCount={colCount}
                          items={items}
                          centercontent={centercontent}
                          activeBorder={activeBorder}
        />
    )

}
