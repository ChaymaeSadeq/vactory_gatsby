import React from "react";

export const SlashesBreadcrumb = ({ items }) => {
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
								className="flex-shrink-0 h-5 w-5"
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
							<svg
								className="flex-shrink-0 h-5 w-5 text-gray-300"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
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