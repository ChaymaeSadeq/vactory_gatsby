import React from "react";
import {Picture} from "vactory-gatsby-ui";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 0px)"
        },
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200
};

export const TeamsColonnesInline = ({imageUrl, image_alt, name, role, description, activeBorder}) => {
    return (
            <div className={`flex space-x-2.5 rtl:space-x-reverse items-center m-2 ${activeBorder ? "border-2 border-gray-400 p-2" : ""}`}>
                {imageUrl && <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Picture
                        file={imageUrl}
                        alt={image_alt}
                        sizes={imageStyles.sizes}
                        width={imageStyles.width}
                        height={imageStyles.height}
                        ratio={imageStyles.ratio}
                    />
                </div>}
                <div>
                    {name &&
                    <h4 className="mb-1 text-xl font-bold">{name}</h4>
                    }
                    {role &&
                    <div className="text-gray-500">{role}</div>
                    }
                    {description &&
                    <div>{description}</div>
                    }
                </div>
                
            </div>
    )
}