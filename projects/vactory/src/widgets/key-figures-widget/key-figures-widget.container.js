import React from 'react'
import {KeyFiguresWidget} from "./key-figures-widget";
import get from "lodash.get";

export const KeyFiguresWidgetContainer = ({data}) => {
    
    const extra_field = {};
    extra_field.link = get(data, "extra_field.link.url", null);
    extra_field.linkLabel = get(data, "extra_field.link.title", null);

    const fields = data.components.map((field) => {
        return {
          chiffre : get(field, "chiffre", null),
          chiffre_alt : get(field, "chiffre_alt", null),
          title : get(field, "title", null), 
        };
      });
    return <KeyFiguresWidget extra_field={extra_field} fields={fields}/>
};
