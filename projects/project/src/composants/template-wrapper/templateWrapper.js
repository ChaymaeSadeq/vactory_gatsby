import React from "react";

export const TemplateWrapper = ({bigTitle, intro, children}) => {
    return (
        <div className="p-6 md:p-8">
            {(bigTitle || bigTitle) &&
            <div className="mb-8">
                {bigTitle &&
                <h2 className="text-3xl font-bold">{bigTitle}</h2>
                }
                {intro &&
                <div className="leading-snug text-base">{intro}</div>
                }
            </div>
            }
            <>
                {children}
            </>
        </div>
    )
}