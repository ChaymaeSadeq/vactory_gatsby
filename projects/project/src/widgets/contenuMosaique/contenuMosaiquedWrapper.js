import React from "react";
import {Box} from "vactory-ui";
import {ContenuMosaique} from "./contenuMosaique";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuMosaiquedWrapper = ({centercontent, intro, bigTitle, activeBorder, items}) => {
    const contentTextAlignClass = centercontent ? "center" : "left"
    const contentWithBorder = activeBorder
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Box
                borderWidth={contentWithBorder ? 'medium' : 'none'}
                borderStyle={contentWithBorder ? 'solid' : 'none'}
                borderColor={contentWithBorder ? 'black' : 'none'}
                borderRadius={contentWithBorder ? 'xlarge' : '0'}
            >
                {
                    items.map((item, index) => {
                        const inversed = index % 2;
                        return (
                            <ContenuMosaique key={index} {...item}
                                             inversed={inversed}
                                             textAlign={contentTextAlignClass}
                                             activeBorder={contentWithBorder}
                            />
                        )
                    })
                }
            </Box>
        </TemplateWrapper>
    )
}