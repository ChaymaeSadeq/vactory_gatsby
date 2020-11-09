import React from "react";
import get from 'lodash.get'
import {ContenuColonneEncadreWrapper} from "./contenuColonneEncadreWrapper"

export const ContenuColonneEncadreContainer = ({data}) => {

    const data_list = {
        centercontent : get(data, 'extra_field.group_options.centercontent'),
        intro : get(data, 'extra_field.intro'),
        colCount : get(data, "extra_field.group_options.colCount"),
        bigTitle : get(data, "extra_field.bigTitle"),
        items : data.components.map((item) => {
            return {
                title: get(item, "title"),
                description: get(item, "description.value.#text"),
                pictoImg: get(item, "pictoImg.0"),
                image_alt: get(item, 'pictoImg_alt'),
                link: get(item, 'link'),
            }
        })
    }



    return (
        <ContenuColonneEncadreWrapper {...data_list}
        />
    )

}