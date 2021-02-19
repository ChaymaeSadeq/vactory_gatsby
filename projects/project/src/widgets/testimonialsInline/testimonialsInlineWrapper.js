import React from "react";
import {TestimonialsInline} from "./TestimonialsInline";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const TestimonialsInlineWrapper = ({bigTitle, intro, inversed, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                            <TestimonialsInline inversed={inversed} {...item} />
                    </div>
                )
            })}
        </TemplateWrapper>
    )
}