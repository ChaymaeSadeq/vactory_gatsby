import React from 'react'
import {KeyNumbersSection} from "./key-figures-widget";
import get from "lodash.get";

export const KeyFiguresWidgetContainer = ({data}) => {
  
    const action = {
      href: get(data, "extra_field.link.url", null),
      label: get(data, "extra_field.link.title", null),
    }

    return <KeyNumbersSection
      action={action}
      numbers={data.components} />
};
