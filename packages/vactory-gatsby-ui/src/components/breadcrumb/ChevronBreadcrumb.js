import React from "react";


export const ChevronBreadcrumb = ({items}) => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="flex items-center rtl:space-x-reverse space-x-4">
				<li>
					<div>
						<a
							href="#!"
							className="text-gray-400 hover:text-gray-500"
						>
							{/* <!-- Heroicon name: home --> */}
							<svg
								className="flex-shrink-0 h-5 w-5 transform rtl:-scale-x-100"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
							<span className="sr-only">Home</span>
						</a>
					</div>
				</li>
				{items.map((item) => (
					<li>
						<div className="flex items-center">
							{/* <!-- Heroicon name: chevron-right --> */}
							<svg
								className="flex-shrink-0 h-5 w-5 text-gray-400 transform rtl:-scale-x-100"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
							<a
								href={item.url}
								className="ltr:ml-4 rtl:mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
							>
								{item.text}
							</a>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}