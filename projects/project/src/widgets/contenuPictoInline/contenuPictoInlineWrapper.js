import React from "react";
import {ContenuPictoInline} from "./contenuPictoInline";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuPictoInlineWrapper = ({colCount, centercontent, bigTitle, intro, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <div className="flex flex-wrap">
                {items.map((item, index) => {
                    return (
                        <div className={`w-full sm:w-1/2 md:w-1/${colCount}`} key={index}>
                            <ContenuPictoInline {...item} centercontent={centercontent}/>
                        </div>
                    )
                })}
            </div>
        </TemplateWrapper>
    )
}