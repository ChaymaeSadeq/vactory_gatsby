import React from "react";
import {ContenuInlineRows} from "./contenuInlineRows";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuInlineRowsWrapper = ({bigTitle, intro, inversed, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.map((item, index) => {
                return (
                    <ContenuInlineRows key={index} {...item} inversed={inversed}/>
                )
            })}
        </TemplateWrapper>
    )
}