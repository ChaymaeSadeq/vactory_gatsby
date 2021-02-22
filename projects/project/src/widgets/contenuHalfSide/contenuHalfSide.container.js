import React from "react";
import {ContenuHalfSide} from "./contenuHalfSide";
import get from 'lodash.get'

export const ContenuHalfSideContainer = ({data}) => {
    const data_list = {
        title : get(data, 'components.0.title'),
        description : get(data, 'components.0.description'),
        cta_text : get(data, "components.0.link.title"),
        cta_url : get(data, "components.0.link.url"),
        inversed : get(data, "components.0.group_options.inversed"),
        centercontent : get(data, "components.0.group_options.centercontent"),
    }

    return (
        <ContenuHalfSide {...data_list} />
    )
}