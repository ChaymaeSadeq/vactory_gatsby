import React from "react";
import get from 'lodash.get'
import {ChiffreCleWrapper} from "./chiffreCleWrapper";

export const ChiffreCleContainer = ({data}) => {
    const intro = get(data, 'extra_field.intro')
    const bigTitle = get(data, "extra_field.bigTitle")
    const colCount = get(data, "extra_fields.group_options.colCount")
    const items = data.components.map((item) => {
        return {
            number: get(item, "number"),
            word_before: get(item, "word_before"),
            word_after: get(item, "word_after"),
            description: get(item, 'description'),
        }
    })
    return (
        <ChiffreCleWrapper intro={intro} bigTitle={bigTitle} items={items} colCount={colCount} />
    )
}