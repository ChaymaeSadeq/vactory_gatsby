import React from "react";
import get from 'lodash.get'
import {ContenuInline} from "./contenuInline";

export const ContenuInlineContainer = ({data}) => {

    const data_list = {
        imgUrl : get(data, 'components.0.imgUrl.0'),
        image_alt : get(data, 'components.0.pictoImg_alt'),
        title : get(data, 'components.0.title'),
        description : get(data, "components.0.description.value.#text"),
        cta_text : get(data, "components.0.link.title"),
        cta_url : get(data, "components.0.link.url"),
        activeBorder : get(data, "components.0.group_options.activeBorder"),
        activeBorderImage : get(data, 'components.0.group_options.activeBorderImage'),
        inversed : get(data, 'components.0.group_options.inversed'),
        colImage : get(data, 'components.0.group_options.colCount'),
    }


    return (
        <ContenuInline {...data_list} />
    );
}