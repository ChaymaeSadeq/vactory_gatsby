import React from "react";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {LinkUrl} from "../../composants/link-url";

export const ContenuHalfSide = ({title, description, cta_text, cta_url, inversed, centercontent}) => {
    return (
        <TemplateWrapper>
            <div className="flex p-6 sm:p-8 md:p-10">

                <div
                    className={`${ centercontent ? "text-center" : ""} w-full sm:2/3 md:1/2 lg:w-5/12 bg-white p-5 ${ !inversed ? "mt-auto" : "ml-0"} ${ inversed ? "mr-auto" : "mr-0" }`}
                >
                    {title &&
                    <h3 className="text-2xl font-medium">{title}</h3>
                    }
                    {description &&
                    <div className="mb-3">{description}</div>
                    }
                    {(cta_text && cta_url) &&
                    <LinkUrl href={cta_url}>{cta_text}</LinkUrl>
                    }
                </div>
            </div>
        </TemplateWrapper>
    )
}