import React from "react"
import {Wysiwyg} from 'vactory-gatsby-ui'
import {TemplateWrapper} from "../../composants/template-wrapper";
import {VideoYoutube} from "../../composants/videoYoutube/videoYoutube";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_1124_632",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_354_199",
            media: "(min-width: 768px)"
        }
    ],
    width: 354,
    height: 200,
    ratio: 16 / 9
};

export const ContentVideoYoutube = ({videoId, image, image_alt, hideImage, isPopUp, description}) => {
    return (
        <TemplateWrapper>
            <VideoYoutube videoId={videoId} image={image} image_alt={image_alt}
                          hideImage={hideImage} isPopUp={isPopUp} imageStyles={imageStyles}/>
            {description &&
            <div className="mt-5">
                <Wysiwyg html={description}/>
            </div>
            }
        </TemplateWrapper>
    )
}