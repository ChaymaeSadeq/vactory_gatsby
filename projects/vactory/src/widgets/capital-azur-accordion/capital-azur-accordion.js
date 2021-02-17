import React from 'react'

export const CapitalAzurAccordion = ({items}) => {
    const [openId, setIsOpenId] = React.useState(null);

    return (
		<div className="mt-6 space-y-6 divide-y divide-gray-200">
			{items.map((item, index) => {
				return (
					<div className="pt-6" key={index}>
						<div className="text-lg">
							{/* <!-- Expand/collapse title button --> */}
							<button
								onClick={openId === index ? () => setIsOpenId(null) : () => setIsOpenId(index)}
								className="ltr:text-left rtl:text-right w-full flex justify-between items-start text-gray-400 dark:text-gray-600"
							>
								<span className="font-medium text-gray-900 dark:text-gray-100">
									{item.title}
								</span>
								<span className="ltr:ml-6 rtl:mr-6 h-7 flex items-center">
									{/* <!-- Heroicon name: chevron-down

											Open: "-rotate-180", Closed: "rotate-0"
											--> */}
									<svg
										className={` ${
											openId === index ? "-rotate-180" : "rotate-0"
										}  h-6 w-6 transform transition`}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div
							className={`${
								openId === index ? "" : "hidden"
							} mt-2 ltr:pr-12 rtl:pl-12`}
						>
							<div className="py-4">
								{item.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
