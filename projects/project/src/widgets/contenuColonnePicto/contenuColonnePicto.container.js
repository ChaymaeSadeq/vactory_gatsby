import React from "react";
import get from 'lodash.get'
import {ContenuColonnePictoWrapper} from "./contenuColonnePictoWrapper";

export const ContenuColonnePictoContainer = ({data}) => {
    const data_list = {
        centercontent: get(data, 'extra_field.group_options.centercontent'),
        intro: get(data, 'extra_field.intro'),
        colCount: get(data, "extra_field.group_options.colCount"),
        bigTitle: get(data, "extra_field.bigTitle"),
        items: data.components.map((item) => {
            return {
                title: get(item, "title"),
                description: get(item, "description.value.#text"),
                cta_text: get(item, "link.title"),
                cta_url: get(item, "link.url"),
                pictoImg: get(item, "pictoImg.0"),
                image_alt: get(item, 'pictoImg_alt')
            }
        })
    }

    return (
        <ContenuColonnePictoWrapper {...data_list} />
    )
}
