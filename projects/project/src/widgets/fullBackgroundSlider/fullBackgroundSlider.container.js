import React from "react";
import get from 'lodash.get'
import {FullBackgroundSliderWrapper} from "./fullBackgroundSliderWrapper";

export const FullBackgroundSliderContainer = ({data}) => {
    const data_list = {
        bigTitle: get(data, 'extra_field.bigTitle'),
        intro: get(data, 'extra_field.intro'),
        items: data.components.map(item => ({
            imageUrl: get(item, 'imageUrl.0'),
            image_alt: get(item, 'image_alt'),
            title: get(item, 'title'),
            description: get(item, 'description.value.#text'),
            cta_text: get(item, 'link.title'),
            cta_url: get(item, 'link.url'),
        }))
    }
    return (
        <FullBackgroundSliderWrapper {...data_list} />
    )
}