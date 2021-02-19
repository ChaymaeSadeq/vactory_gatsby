import React from "react";
import {Wysiwyg} from "../../utilites";
import {LinkUrl} from "../../composants/link-url";

export const FullBackgroundSlider = ({title, description, cta_text, cta_url, isActive}) => {
    return (
        <div className="flex h-full flex-col justify-center items-center mx-auto max-w-lg">
            <div className="text-center" textAlign="center" >
                {title &&
                <h3 className="text-white text-3xl font-bold mb-2">{title}</h3>
                }
                {description &&
                <div className="text-white mb-3">
                    <Wysiwyg html={description}/>
                </div>
                }
                {(cta_url && cta_text) &&
                <LinkUrl href={cta_url}>{cta_text}</LinkUrl>
                }
            </div>
        </div>
    )
}
