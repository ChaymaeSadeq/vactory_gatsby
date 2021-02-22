import React from "react";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {TeamsColonnesInline} from "./teamsColonnesInline";


export const TeamsColonnesInlineWrapper = ({bigTitle, intro, colCount, activeBorder, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <div className="flex flex-wrap">
                {items.map((item, index) => {
                    return (
                        <div className={`w-full sm:w-1/2 md:w-1/${colCount}`} key={index}>
                            <TeamsColonnesInline key={index} activeBorder={activeBorder} {...item} />
                        </div>
                    )
                })}
            </div>
        </TemplateWrapper>
    )
}