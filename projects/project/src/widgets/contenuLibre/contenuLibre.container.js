import React from "react";
import get from "lodash.get"
import {ContenuLibre} from "./contenuLibre";

export const ContenuLibreContainer = ({data}) => {
    const content = get(data, 'components.0.value.#text')
    return <ContenuLibre content={content} />
}