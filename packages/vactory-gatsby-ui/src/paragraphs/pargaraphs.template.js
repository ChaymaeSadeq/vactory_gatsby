import React from "react"
import {WidgetsMapping, WidgetsAmpMapping} from 'vactory-gatsby-core';

export default (props) => {
    const {id, settings, hasAMP = false, ...rest} = props;
    let Component = hasAMP ? WidgetsAmpMapping[id] : WidgetsMapping[id];

    if (!Component) {
        return (
            <div className="alert alert-danger" role="alert">
                Caught an error. Template {id} is not mapped!
            </div>
        )
    }

    return (
        <div>
            <Component data={settings} {...rest} />
        </div>
    )
}
