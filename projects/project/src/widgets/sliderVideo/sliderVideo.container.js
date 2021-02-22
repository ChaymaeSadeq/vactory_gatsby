import React from "react";
import get from 'lodash.get'
import {SliderVideoWrapper} from "./sliderVideoWrapper";

export const SliderVideoContainer = ({data}) => {
    const data_list = {
        items: data.components.map(item => ({
            imageUrl: get(item, 'imageUrl'),
            image_alt: get(item, 'image_alt'),
            videoId: get(item, 'videoId'),
        }))
    }
    return (
        <SliderVideoWrapper {...data_list} />
    )
}