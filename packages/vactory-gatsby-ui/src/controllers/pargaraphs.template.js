import React from "react"
import {WidgetsMapping, WidgetsAmpMapping} from 'vactory-gatsby-core';

const Alert = React.forwardRef(({children}, ref) => (
	<div className="max-w-4xl mx-auto bg-yellow-50 ltr:border-l-4 rtl:border-r-4 border-yellow-400 p-4 my-2.5">
		<div className="flex">
			<div className="flex-shrink-0">
				{/* <!-- Heroicon name: exclamation --> */}
				<svg
					className="h-5 w-5 text-yellow-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="ltr:ml-3 rtl:mr-3">
				<p className="text-sm text-yellow-700">
					{children}
				</p>
			</div>
		</div>
	</div>
));

export const ParagraphsTemplate = (props) => {
    const {id, settings, hasAMP = false, ...rest} = props;
    let Component = hasAMP ? WidgetsAmpMapping[id] : WidgetsMapping[id];

    if (!Component) {
        return (
            <Alert role="alert">
                Caught an error. Template {hasAMP ? "AMP " +id : id} is not mapped!
            </Alert>
        )
    }

    return (
        <Component data={settings} {...rest} />
    )
};
