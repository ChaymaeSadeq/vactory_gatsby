import React from "react";
import get from 'lodash.get'
import {ContenuInline} from "./contenuInline";

export const ContenuInlineContainer = ({data}) => {
    const imgUrl = get(data, 'components.0.imgUrl.0')
    const image_alt = get(data, 'components.0.pictoImg_alt')
    const title = get(data, 'components.0.title')
    const description = get(data, "components.0.description.value.#text")
    const cta_text = get(data, "components.0.link.title")
    const cta_url = get(data, "components.0.link.url")
    const activeBorder = get(data, "components.0.group_options.activeBorder")
    const activeBorderImage = get(data, 'components.0.group_options.activeBorderImage');
    const inversed = get(data, 'components.0.group_options.inversed');
    const colImage = get(data, 'components.0.group_options.colCount')

    return (
        <ContenuInline imgUrl={imgUrl} image_alt={image_alt} title={title} description={description} cta_text={cta_text}
                       cta_url={cta_url} activeBorder={activeBorder} activeBorderImage={activeBorderImage}
                       inversed={inversed} colImage={colImage}
        />
    );
}