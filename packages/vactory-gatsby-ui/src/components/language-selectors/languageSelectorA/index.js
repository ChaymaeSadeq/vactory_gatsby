import React from "react"
import { Transition } from "@headlessui/react";
import {AppSettings} from 'vactory-gatsby-core'

export const LanguageSelectorA = ({pageInfo, currentLanguage}) => {
    const languages = AppSettings.languages.languageLabels;

	const node = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(false);

	// to close dropdown on click outside
	const handleClickOutside = (e) => {
		if (!node.current.contains(e.target))
			setIsOpen(false);
	};

	// attach click outside handler
	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

    const switchLanguage = (selectedLng) => {
        const {path} = pageInfo.find(route => route.locale === selectedLng);
        window.location = path
    };

    return (
		<div
			className="relative inline-block ltr:text-left rtl:text-right"
			ref={node}
		>
			<div>
				<button
					onClick={(e) => setIsOpen(!isOpen)}
					type="button"
					className="inline-flex items-center p-2 border-2 border-transparent rounded-full shadow-sm border-indigo-700 text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					id="options-menu"
					aria-haspopup="true"
					aria-expanded={isOpen}
				>
					<svg
						className="h-5 w-5"
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
							d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
						/>
					</svg>
				</button>
			</div>

			<Transition
				show={isOpen}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="ltr:origin-top-right rtl:origin-top-left absolute ltr:right-0 rtl:left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
			>
                <div
                    className="py-1 flex flex-col"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    {languages.map((lng) => (
                        <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => switchLanguage(lng.code)}
                        >
                            {lng.label}
                        </button>
                    ))}
				</div>
			</Transition>
		</div>
	);
}
