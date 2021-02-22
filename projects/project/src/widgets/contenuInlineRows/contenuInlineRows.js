import React from "react";
import {Wysiwyg, Picture} from "vactory-gatsby-ui";
import {LinkUrl} from "../../composants/link-url";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 0px)"
        }
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200
};

export const ContenuInlineRows = ({pictoImg, title, cta_text, cta_url, description, inversed, image_alt}) => {
    return (
        <div className={`flex flex-col ${ inversed ? "md:flex-row-reverse" : "md:flex-row" } items-center p-5 border-b border-black`}>
            {pictoImg &&
            <div
                className={`${ !inversed ? "pr-4" : "pr-0" } ${ inversed ? "pl-4" : "pl-0" } mb-4 sm:mb-0 w-52`}>
                <Picture
                    file={pictoImg}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                    alt={image_alt}
                    disableAspectRatio
                />
            </div>
            }
            {(title || description) &&
            <div
                className={` ${ !inversed ? "pr-4" : "pr-0" } ${ inversed ? "pl-4" : "pl-0" } flex-1 `}>
                {title &&
                <h4 className="text-2xl font-medium mb-2">{title}</h4>
                }
                {description &&
                <Wysiwyg html={description}/>
                }
            </div>
            }
            {(cta_text && cta_url) &&
                <LinkUrl href={cta_url}>{cta_text}</LinkUrl>
            }

        </div>
    )
}