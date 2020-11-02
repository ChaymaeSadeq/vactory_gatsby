import React from "react";
import get from 'lodash.get'
import {VideoYoutube} from "./videoYoutube";
// videoId, image, hideImage, isPopUp

export const VideoYoutubeContainer = ({data}) => {
    const videoId = get(data, 'components.0.videoId')
    const image = get(data, 'components.0.image.0._default')
    const hideImage = get(data, "components.0.group_options.hideImage")
    const isPopUp = get(data, "components.0.group_options.bigTitle")
    const description = get(data, "components.0.description.value.#text")
    return (
        <VideoYoutube videoId={videoId} image={image} hideImage={hideImage} isPopUp={isPopUp} description={description} />
    )
}