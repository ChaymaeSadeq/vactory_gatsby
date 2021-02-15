import React from "react";
import { CSSTransition } from "react-transition-group";

export const Dropdown = ({ label, items }) => {
	const node = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(false);

	// to close dropdown on click outside
	const handleClickOutside = (e) => {
		if (!node.current.contains(e.target)) setIsOpen(false);
	};

	// attach click outside handler
	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className="relative inline-block ltr:text-left rtl:text-right"
			ref={node}
		>
			<div>
				<button
					onClick={(e) => setIsOpen(!isOpen)}
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
					id="options-menu"
					aria-haspopup="true"
					aria-expanded={isOpen}
				>
					{label}
					<svg
						className="ltr:-mr-1 rtl:-ml-1 ltr:ml-2 rtl:mr-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<CSSTransition
				in={isOpen}
				timeout={{
					enter: 100,
					exit: 75,
				}}
				classNames={{
					enter:
						"transition ease-out duration-100 transform opacity-0 scale-95",
					enterActive:
						"transition ease-out duration-100 transform opacity-100 scale-100",
					enterDone: "",
					exit: "transition ease-in duration-75",
					exitActive: "transform opacity-0 scale-95",
					exitDone: "hidden",
				}}
			>
				{items}
			</CSSTransition>
		</div>
	);
};
