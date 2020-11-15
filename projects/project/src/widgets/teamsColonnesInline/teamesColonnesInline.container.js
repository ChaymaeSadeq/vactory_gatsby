import React from "react";
import get from 'lodash.get'
import {TeamsColonnesInlineWrapper} from "./teamesColonnesInlineWrapper";

export const TeamColonnesInlineContainer = ({data}) => {
    const data_list = {
        bigTitle: get(data, "extra_field.bigTitle"),
        intro: get(data, 'extra_field.intro'),
        colCount: get(data, "extra_field.group_options.colCount"),
        activeBorder: get(data, 'extra_field.group_options.activeBorder'),
        items: data.components.map(item => ({
            imageUrl: get(item, 'imageUrl.0'),
            image_alt: get(item, 'image_alt'),
            name: get(item, 'name'),
            role: get(item, 'role'),
            description: get(item, 'description'),
        }))
    }
    return (
        <TeamsColonnesInlineWrapper {...data_list} />
    )
}