import React from "react"
import {WidgetsMapping} from 'vactory-gatsby-core';

export const BannersTemplate = ({widget, ...rest}) => {
    const {widget_id, widget_data} = widget;
    let Component = WidgetsMapping[widget_id];

    if (!Component) {
        return (
            <div className="alert alert-danger" role="alert">
                Caught an error. Banner Template {widget_id} is not mapped!
            </div>
        )
    }

    return <Component data={JSON.parse(widget_data)} {...rest} />
};
