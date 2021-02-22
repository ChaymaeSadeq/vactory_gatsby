import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {LinkUrl} from "../../composants/link-url";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_60_60",
            media: "(min-width: 0px)"
        },
    ],
    width: 60,
    height: 60,
    ratio: 60 / 60
};

const Encadre = ({ sx, children, ...rest }) => {
    return (
        <div className="border-12 border-black px-4 py-5 mb-4" {...rest}>
            {children}
        </div>
    )
}


export const ContenuColonneEncadre = ({title, description, pictoImg, image_alt, link}) => {
    return (
        <Encadre>
            {pictoImg &&
            <div className="mx-auto mb-4 max-w-min" >
                <Picture
                    file={pictoImg}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                    alt={image_alt}
                />
            </div>

            }
            {title &&
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            }
            {description &&
            <Wysiwyg html={description}/>
            }
            {(link) &&
                <LinkUrl outline="primary" {...link} />
            }
        </Encadre>
    )
}