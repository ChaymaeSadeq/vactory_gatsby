import React from "react";
import get from 'lodash.get'
import {ContentVideoYoutube} from "./contentVideoYoutube";

export const ContentVideoYoutubeContainer = ({data}) => {

    const data_list = {
        videoId : get(data, 'components.0.videoId'),
        image : get(data, 'components.0.image.0'),
        image_alt : get(data, 'components.0.image_alt'),
        hideImage : get(data, "components.0.group_options.hideImage"),
        isPopUp : get(data, "components.0.group_options.isPopUp"),
        description : get(data, "components.0.description.value.#text"),
    }
    return (
        <ContentVideoYoutube {...data_list} />
    )
}