import React from "react";
import { Wysiwyg } from 'vactory-gatsby-ui'
import {Picture} from "vactory-gatsby-ui";
import {LinkUrl} from "../../composants/link-url";

export const ContenuColonneImage = ({title, description, cta_url, cta_text, pictoImg, pictoImg_alt, activeBorder, imageStyles}) => {
    return (
        <div className={`p-1 mb-6 h-full ${activeBorder ? "border-4 border-black p-3" : ""}`}>
            {pictoImg &&
            <div className="mb-5">
                <Picture
                    file={pictoImg}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                    alt={pictoImg_alt}
                    className="card-image"
                />
            </div>
            }
            {title  &&
            <h3 className="text-2xl font-medium mb-1">{title}</h3>
            }
            {description &&
                <div className="mb-2">
                    <Wysiwyg html={description} />
                </div>
            }
            {(cta_text && cta_url) &&
            <LinkUrl href={cta_url}>{cta_text}</LinkUrl>
            }
        </div>
    )
}
