import React from "react";
import {Wysiwyg} from "vactory-gatsby-ui";


export const ContenuLibre = ({content}) => {
    return (
        <Wysiwyg html={content}/>
    )
}
