import React from 'react'
import { Transition } from "@headlessui/react";
import { Portal } from "react-portal";
import {useMenu} from "vactory-gatsby-core";
import { Link } from '../../link';
import isClient from "is-client";

export const LayerMenu = ({showMenu, setShowMenu}) => {
    const items = useMenu('main');

    return (
        <Portal node={isClient() && document.getElementById('app')}>
		<div className="fixed inset-y-0 ltr:right-0 rtl:left-0 md:ltr:pl-5 md:rtl:pr-5 max-w-full flex">
			<Transition
				show={showMenu}
				enter="transform transition ease-in-out duration-500 sm:duration-700"
				enterFrom="ltr:-translate-x-full rtl:translate-x-full"
				enterTo="translate-x-0"
				leave="transform transition ease-in-out duration-500 sm:duration-700"
				leaveFrom="translate-x-0"
				leaveTo="ltr:-translate-x-full rtl:translate-x-full"
				className="w-screen md:max-w-md"
			>
				<div className="min-h-full flex flex-col py-6 bg-gray-400 shadow-xl md:overflow-y-scroll">
					<div className="px-4 sm:px-6">
						<div className="flex items-start justify-between">
							<a href="#!" className="block text-indigo-500 font-black border-indigo-500 border-4 p-1">
								VACTORY
							</a>
							<div className="ltr:ml-3 rtl:mr-3 h-7 flex items-center">
								<button
									onClick={() => setShowMenu(false)}
									className="rounded-md text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<span className="sr-only">Close panel</span>
									{/* Heroicon name: x */}
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div className="mt-6 relative flex-1 px-4 sm:px-6">
						{/* Replace with your content */}
						<div className="absolute inset-0 px-4 sm:px-6">
							<div
								className="h-full border-2 border-dashed border-gray-200 text-gray-200 font-mono"
								aria-hidden="true"
							>
								<nav className="space-y-1" aria-label="Sidebar">
									{items.map((item, i) => (
                                        <Link
                                            key={i}
											href={item.url}
											className="bg-gray-100 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
											aria-current="page"
										>
											<span className="truncate">
												{item.title}
											</span>
										</Link>
									))}
								</nav>
							</div>
						</div>
						{/* /End replace */}
					</div>
				</div>
			</Transition>
        </div>
        </Portal>
	);
};
