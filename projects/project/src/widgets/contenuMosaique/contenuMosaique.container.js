import React from "react";
import get from 'lodash.get'
import {ContenuMosaiquedWrapper} from "./contenuMosaiquedWrapper";

export const ContenuMosaiqueContainer = ({data}) => {

    const data_list = {
        centercontent: get(data, 'extra_field.group_options.centercontent'),
        activeBorder: get(data, 'extra_field.group_options.activeBorder'),
        intro: get(data, 'extra_field.intro'),
        bigTitle: get(data, "extra_field.bigTitle"),
        items: data.components.map((item) => {
            return {
                title: get(item, "title"),
                description: get(item, "description.value.#text"),
                cta_text: get(item, "link.title"),
                cta_url: get(item, "link.url"),
                imgUrl: get(item, "imgUrl.0"),
                image_alt: get(item, 'pictoImg_alt'),
            }
        })
    }

    return (
        <ContenuMosaiquedWrapper {...data_list}/>
    )
}
