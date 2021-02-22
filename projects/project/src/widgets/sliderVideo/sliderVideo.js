import React from "react";
import {VideoYoutube} from "../../composants/videoYoutube/videoYoutube";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_354_199",
            media: "(min-width: 0px)"
        }
    ],
    width: 690,
    height: 398,
    ratio: 690 / 398
};
export const SliderVideo = ({imageUrl, image_alt, videoId}) => {
    return (
        <div>
            <VideoYoutube image={imageUrl} hideImage={false} isPopUp={false} image_alt={image_alt} videoId={videoId}
                          imageStyles={imageStyles}/>
        </div>
    )
}