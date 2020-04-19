import React from "react"
import classNames from "classnames"

const layoutClasses = {
    narrow_width: "container",
    full_width: "container-fluid",
    no_container: "no-container",
};

export default ({children, id, style, layout, className}) => {
    const layoutClass = layoutClasses[layout]
    const isBackgroundSolid = style.backgroundColor ? 'has-background' : null;

    return (
        <div className={classNames(className, isBackgroundSolid)} style={style} id={id}>
            <div className={classNames(layoutClass)}>
                {children}
            </div>
        </div>
    )
}
