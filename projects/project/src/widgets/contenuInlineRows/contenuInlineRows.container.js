import React from "react";
import get from 'lodash.get';
import {ContenuInlineRowsWrapper} from "./contenuInlineRowsWrapper";

export const ContenuInlineRowsContainer = ({data}) => {

    const data_list = {
        intro: get(data, 'extra_field.intro'),
        bigTitle: get(data, "extra_field.bigTitle"),
        inversed: get(data, "extra_field.group_options.inversed"),
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
        <ContenuInlineRowsWrapper {...data_list} />
    )
}