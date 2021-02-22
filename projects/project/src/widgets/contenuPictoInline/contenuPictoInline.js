import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_100_100",
            media: "(min-width: 0px)",
        }
    ],
    width: 100,
    height: 100,
    ratio: 100 / 100
}

export const ContenuPictoInline = ({imgUrl, image_alt, title, description, centercontent}) => {
    return (
        <div className={`flex flex-col sm:flex-row mb-2 ${ centercontent ? "items-center" : "" }`}>
            {imgUrl &&
            <div className="mb-4 sm:mb-0 mx-auto sm:mx-0">
                <Picture
                    file={imgUrl}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    // ratio={imageStyles.ratio}
                    disableAspectRatio
                />
            </div>
            }
            <div className="ltr:pl-4 rtl:pr-4">
                {title &&
                <h4 className="text-2xl font-medium mb-2">{title}</h4>
                }
                {description &&
                <Wysiwyg html={description}/>
                }
            </div>
        </div>
    )
}