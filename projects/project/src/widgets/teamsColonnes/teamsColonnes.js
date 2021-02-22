import React from "react";
import {Picture} from "vactory-gatsby-ui";


export const TeamsColonnes = ({imageUrl, image_alt, name, role, description, image_cyrcle, imageStyles}) => {
    return (
        <div className="p-2 sm:p-3 md:p-5">
            <div className={`mb-3 ${image_cyrcle ? "rounded-full overflow-hidden w-1/2 mx-auto" : "aspect-w-9 aspect-h-5"}`}>
                <Picture
                    file={imageUrl}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </div>
            <div className={`${image_cyrcle ? "text-center" : ""}`}>
                <h4 className="text-2xl font-medium mb-1">{name}</h4>
                <div className="text-gray-500 italic leading-tight mb-1.5">{role}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}