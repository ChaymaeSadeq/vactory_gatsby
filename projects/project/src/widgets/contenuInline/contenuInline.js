import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {TemplateWrapper} from "../../composants/template-wrapper";
import {LinkUrl} from "../../composants/link-url";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_459_258",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 459,
    height: 258,
    ratio: 459 / 258
};

export const ContenuInline = ({imgUrl, image_alt, title, description, cta_text, cta_url, colImage, activeBorder, activeBorderImage, inversed}) => {
    return (
        <TemplateWrapper>
            <div
                className={` ${activeBorder ? "p-2 md:p-5 border-4 border-black" : "p-0"} `}
            >
                <div className={`flex items-center ${inversed ? "flex-row-reverse" : "flex-row"}`}>
                    {imgUrl &&
                    <div className={`px-3 w-full sm:w-1/2 md:1/${colImage}`}>
                        <div className={`mb-5 sm:mb-0 ${activeBorderImage ? "p-1" : "p-5" } ${activeBorderImage ? "border-4 border-black" : ""} `}>
                            <Picture
                                file={imgUrl}
                                alt={image_alt}
                                sizes={imageStyles.sizes}
                                width={imageStyles.width}
                                height={imageStyles.height}
                                ratio={imageStyles.ratio}
                                disableAspectRatio
                            />
                        </div>
                    </div>
                    }
                    <div className={`px-3 w-full sm:w-1/2 md:1/${colImage}`}>
                        <div>
                            {title &&
                            <h3 className="text-3xl font-medium">{title}s</h3>
                            }
                            {description &&
                            <Wysiwyg html={description}/>
                            }
                            {(cta_text && cta_url) &&
                                <LinkUrl href={cta_url}>{cta_text}</LinkUrl>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    )
}