import React, { useState, useEffect } from "react"
import { Portal } from "react-portal";
import { Transition } from "@headlessui/react";
import {navigate} from "gatsby"
import isClient from "is-client"
import { useViewsAlias } from "vactory-gatsby-nodes";

const SearchIcon = (extras) => (
	<svg
		width="24"
		height="24"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
        stroke="currentColor"
        {...extras}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
		/>
	</svg>
);

export const SearchA = () => {
    const [show, setShow] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);
    const searchUrl = useViewsAlias('search');

    // Check SSR
    useEffect(() => {
        setIsBrowser(isClient())
    }, [isClient]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
		<>
			<button
				className="inline-flex items-center p-2 border-2 border-transparent rounded-full shadow-sm border-indigo-700 text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				onClick={() => setShow(true)}
			>
				<SearchIcon className="h-5 w-5" />
				<div className="sr-only">Search</div>
			</button>
			{isBrowser && (
				<Portal node={isClient() && document.getElementById("app")}>
					<Transition
						show={show}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
                        className="transform-gpu fixed inset-0 h-screen w-screen z-10 bg-indigo-900 text-white"
					>
						<div className="h-full flex items-center">
							<div className="container flex flex-col relative pt-28">
                                <form className="relative" onSubmit={(e) => {
                                    e.preventDefault();
                                    const q = e.currentTarget.firstElementChild.value;
                                    navigate(`${searchUrl}?q=${q}`);
                                    setShow(false);
                                }}>
                                    <input
										type="text"
										name="q"
										id="search"
										placeholder="Que cherchez-vous ?"
										className="bg-transparent ring-0 shadow-sm block w-full text-3xl border-0 border-b-4 border-white border-opacity-50 focus:border-opacity-100 text-white placeholder-white placeholder-opacity-50 py-5 pr-20"
									/>
                                    <button
                                        type="submit"
										className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100 transition"
										onClick={() => setShow(false)}
									>
										<SearchIcon className="h-8 w-8" />
										<span className="sr-only">
											Rechercher !
										</span>
									</button>
								</form>
								<p className="font-medium self-end mt-5">
									Appuyer sur la touche "Entrée" du clavier
									pour lancer la recherche
								</p>
								<button
									className="absolute top-0 right-0 opacity-50 transform translate-x-full -translate-y-full hover:opacity-100 p-0"
									onClick={() => setShow(false)}
								>
									<svg
										className="h-10 w-10"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										width="24"
										height="24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
									<span className="sr-only">
										close search
									</span>
								</button>
							</div>
						</div>
					</Transition>
				</Portal>
			)}
		</>
	);
};
