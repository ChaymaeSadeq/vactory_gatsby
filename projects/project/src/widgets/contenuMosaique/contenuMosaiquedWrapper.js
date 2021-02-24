import React from "react";
import {ContenuMosaique} from "./contenuMosaique";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuMosaiquedWrapper = ({centercontent, intro, bigTitle, activeBorder, items}) => {
    const contentWithBorder = activeBorder
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <div
                className={` space-x-2 rtl:space-x-reverse  ${ contentWithBorder ? "space-y-2 bg-black border-4 border-black rounded-lg overflow-hidden" : "" } `}
            >
                {
                    items.map((item, index) => {
                        const inversed = index % 2;
                        return (
                            <ContenuMosaique key={index} {...item}
                                             inversed={inversed}
                                             centered={centercontent}
                                             activeBorder={contentWithBorder}
                            />
                        )
                    })
                }
            </div>
        </TemplateWrapper>
    )
}