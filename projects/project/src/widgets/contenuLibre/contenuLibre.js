import React from "react";
//import {Wysiwyg} from "vactory-gatsby-ui";
import {Wysiwyg} from "../../utilites";


export const ContenuLibre = ({content}) => {
    return (
        <Wysiwyg html={content}/>
    )
}
