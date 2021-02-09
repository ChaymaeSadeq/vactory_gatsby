import React from 'react'
import { Transition } from "@headlessui/react";
import { GovernorCard } from "vactory-gatsby-gouvernance";


export const Tabs = ({posts: items, terms}) => {
	const [currentTab, setCurrentTab] = React.useState(terms?.[0]?.id || null);

	const clickHandler = (e) => {
		e.preventDefault();
		setCurrentTab(e.currentTarget.id);
	};

	return (
		<div>
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					onBlur={() => {}}
					onChange={(e) => setCurrentTab(e.currentTarget.value)}
					id="tabs"
					name="tabs"
					className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
				>
					{terms.map((term, i) => (
						<option value={term.id} key={`${i}-${term.id}`}>
							{term.label}
						</option>
					))}
				</select>
			</div>
			<div className="hidden sm:block">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex" aria-label="Tabs">
						{terms.map((term, i) => (
							<a
								key={`${i}-${term.id}`}
								onClick={clickHandler}
								id={term.id}
								href="#!"
								className={` ${
									currentTab === term.id
										? "border-indigo-500 text-indigo-600"
										: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
								} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
							>
								{term.label}
							</a>
						))}
					</nav>
				</div>
			</div>

			<div className="relative">
				{terms.map((term) => (
					<Transition
						key={term.id}
						show={currentTab === term.id}
						enter="ease-out duration-300 transition"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-out duration-300 transition absolute inset-0"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						className=""
					>
						<ul className="my-3 mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
							{items.map((item) => {
								if (item?.role?.id !== currentTab) return null;
								return (
									<li key={item.key}>
										<GovernorCard {...item} />
									</li>
								);
							})}
						</ul>
					</Transition>
				))}
			</div>
		</div>
	);
};
