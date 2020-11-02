import React from "react";
//import {Wysiwyg} from "vactory-gatsby-ui";
import {Wysiwyg} from "../../utilites";
import {TemplateWrapper} from "../../composants/template-wrapper";


export const ContenuLibre = ({content}) => {
    return (
        <TemplateWrapper>
            <Wysiwyg html={content}/>
        </TemplateWrapper>
    )
}
