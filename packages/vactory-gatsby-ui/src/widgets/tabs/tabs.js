import React from 'react'
import { Transition } from "@headlessui/react";


export const Tabs = ({ items }) => {
	const [currentTab, setCurrentTab] = React.useState(items?.[0]?.title || null);

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
					{items.map((item, i) => (
						<option key={i}>{item.title}</option>
					))}
				</select>
			</div>
			<div className="hidden sm:block">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex" aria-label="Tabs">
						{items.map((item) => (
							<a
								key={item.title}
								onClick={clickHandler}
								id={item.title}
								href="#!"
								className={` ${
									currentTab === item.title
										? "border-indigo-500 text-indigo-600"
										: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
								} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
							>
								{item.title}
							</a>
						))}
					</nav>
				</div>
			</div>

			<div className="relative">
				{items.map((item) => (
					<Transition
						key={item.title}
						show={currentTab === item.title}
						enter="transform ease-out duration-300 transition"
						enterFrom="scale-90 opacity-0"
						enterTo="scale-100 opacity-100"
						leave="transform ease-out duration-300 transition"
						leaveFrom="scale-100 opacity-100"
						leaveTo="scale-90 opacity-0"
						className="absolute inset-0"
					>
						<div>{item.description}</div>
					</Transition>
				))}
			</div>
		</div>
	);
};
