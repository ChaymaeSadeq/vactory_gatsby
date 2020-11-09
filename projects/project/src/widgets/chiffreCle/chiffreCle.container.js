import React from "react";
import get from 'lodash.get'
import {ChiffreCleWrapper} from "./chiffreCleWrapper";

export const ChiffreCleContainer = ({data}) => {

    const data_list = {
        intro: get(data, 'extra_field.intro'),
        bigTitle: get(data, "extra_field.bigTitle"),
        colCount: get(data, "extra_field.group_options.colCount"),
        items: data.components.map((item) => {
            return {
                imageUrl: get(item, 'imageUrl.0'),
                image_alt: get(item, 'image_alt'),
                number: get(item, "number"),
                word_before: get(item, "word_before"),
                word_after: get(item, "word_after"),
                description: get(item, 'description'),
            }
        })
    }
    return (
        <ChiffreCleWrapper {...data_list} />
    )
}