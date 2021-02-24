import React from 'react'
import BaseBackToTop from "./BackToTop";


export const BackToTop = (props) => {
    return (
		<BaseBackToTop
			showOnScrollUp={true}
			showAt={40}
			speed={1500}
			easing="easeInOutQuint"
			{...props}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="w-9 h-9"
				width="36px"
				height="36px"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
				/>
			</svg>
		</BaseBackToTop>
	);
};
