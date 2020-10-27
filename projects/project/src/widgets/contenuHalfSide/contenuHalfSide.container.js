import React from "react";
import {ContenuHalfSide} from "./contenuHalfSide";
import get from 'lodash.get'

export const ContenuHalfSideContainer = ({data}) => {
    const title = get(data, 'components.0.title')
    const description = get(data, 'components.0.description')
    const cta_text = get(data, "components.0.link.title")
    const cta_url = get(data, "components.0.link.url")
    const inversed = get(data, "components.0.group_options.inversed")
    const centercontent = get(data, "components.0.group_options.centercontent")

    return (
        <ContenuHalfSide title={title} description={description} cta_text={cta_text} cta_url={cta_url}
                         inversed={inversed} centercontent={centercontent}/>
    )
}