import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {LinkUrl} from "../../composants/link-url";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_60_60",
            media: "(min-width: 768px)"
        },
        {
            name: "decoupled_image_60_60",
            media: "(max-width: 767px)"
        }
    ],
    width: 60,
    height: 60,
    ratio: 60 / 60
};

export const ContenuColonnePicto = ({title, description, cta_url, cta_text, pictoImg, image_alt}) => {
    return (
        <div className="mb-5">
                
            {pictoImg &&
            <div className="mb-4 mx-auto w-12">
                <Picture
                    file={pictoImg}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </div>
            }
            {title &&
            <h3 className="text-2xl font-semibold mb-1">{title}</h3>
            }
            {description && <div className="mb-2">
                <Wysiwyg className="mb-2" html={description}/>
            </div>
            }
            {(cta_text && cta_url) &&
            <LinkUrl href={cta_url}>{cta_text}</LinkUrl>
            }
        </div>
        )
}