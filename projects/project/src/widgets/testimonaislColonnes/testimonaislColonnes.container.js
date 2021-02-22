import React from "react";
import get from 'lodash.get'
import {TestimonaislColonnesWrapper} from "./testimonaislColonnesWrapper";

export const TestimonaislColonnesContainer = ({data}) => {
    const data_list = {
        bigTitle: get(data, "extra_field.bigTitle"),
        intro: get(data, 'extra_field.intro'),
        colCount: get(data, "extra_field.group_options.colCount"),
        inversed: get(data, 'extra_field.group_options.inversed'),
        items: data.components.map(item => ({
            imageUrl: get(item, 'imageUrl.0'),
            image_alt: get(item, 'image_alt'),
            name: get(item, 'name'),
            role: get(item, 'role'),
            description: get(item, 'description.value.#text'),
        }))
    }
    return (
        <TestimonaislColonnesWrapper {...data_list} />
    )
}