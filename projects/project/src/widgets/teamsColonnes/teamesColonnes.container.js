import React from "react";
import get from 'lodash.get'
import {TeamsColonnesWrapper} from "./teamesColonnesWrapper";

export const TeamColonnesContainer = ({data}) => {
    const data_list = {
        bigTitle: get(data, "extra_field.bigTitle"),
        intro: get(data, 'extra_field.intro'),
        image_cyrcle: get(data, 'extra_field.group_options.image_cyrcle'),
        colCount: get(data, "extra_field.group_options.colCount"),
        items: data.components.map(item => ({
            imageUrl: get(item, 'imageUrl.0'),
            image_alt: get(item, 'image_alt'),
            name: get(item, 'name'),
            role: get(item, 'role'),
            description: get(item, 'description'),
        }))
    }

    console.log('data_list', data_list);
    return (
        <TeamsColonnesWrapper {...data_list} />
    )
}