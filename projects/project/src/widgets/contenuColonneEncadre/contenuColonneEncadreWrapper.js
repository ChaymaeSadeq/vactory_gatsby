import React from "react";
import {ContenuColonneEncadre} from "./contenuColonneEncadre";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuColonneEncadreWrapper = ({bigTitle, intro, colCount, items, centercontent}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <div className="flex flex-wrap">
                {
                    items.map((item, index) => {
                        return (
                            <div className={` px-1 w-full sm:w-1/2 md:w-1/${colCount} ${centercontent ? "text-center" : ""}`} key={index}>
                                <ContenuColonneEncadre {...item} />
                            </div>
                        )
                    })
                }
            </div>
        </TemplateWrapper>
    )
}