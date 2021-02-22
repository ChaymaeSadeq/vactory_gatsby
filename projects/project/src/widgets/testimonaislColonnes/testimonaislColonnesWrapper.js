import React from "react";
import {TestimonaislColonnes} from "./testimonaislColonnes";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const TestimonaislColonnesWrapper = ({bigTitle, intro, items, colCount, inversed}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <div className="flex flex-wrap">
                {items.map((item, index) => {
                    return (
                        <div className={`w-full sm:w-1/2 md:w-1/${colCount}`} key={index}>
                            <TestimonaislColonnes inversed={inversed} {...item} />
                        </div>
                    )
                })}
            </div>
        </TemplateWrapper>
    )
}