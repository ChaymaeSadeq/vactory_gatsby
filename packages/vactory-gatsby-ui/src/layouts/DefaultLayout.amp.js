import React from "react"
import {StatePageSection} from "../state";

const HeaderAMP = () => {
    return (
		<header className="p-12 bg-white shadow-md">
			<div className="flex items-center w-full">
				<div className="flex items-center flex-grow">
                    <svg
                        className="text-indigo-500"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="0 0 512 512"
					>
						<path d="M482.365 89.402c-46.951-54.725-116.605-89.402-194.365-89.402-141.385 0-256 114.615-256 256s114.615 256 256 256c77.76 0 147.414-34.678 194.364-89.402l-162.364-166.598 162.365-166.598zM352 60.301c19.716 0 35.699 15.982 35.699 35.699s-15.983 35.699-35.699 35.699-35.699-15.983-35.699-35.699c0-19.716 15.983-35.699 35.699-35.699z" />
					</svg>
					<p className="text-center font-black text-lg text-indigo-500">
						AMP HEADER
					</p>
				</div>
			</div>
		</header>
	);
};

const FooterAMP = () => {
    return <footer className="p-8 mt-12 bg-indigo-900">
        <p  className="text-center font-black text-lg text-white">AMP Powered by Factory</p>
    </footer>
};

export const DefaultLayoutAmp = ({children, location, pageContext: {node, pageInfo, breadcrumb}, nodeSettings}) => {
    return (
        <>
            <StatePageSection.Provider>
            <HeaderAMP/>
            <main>
                {children}
            </main>
            </StatePageSection.Provider>
            <FooterAMP/>
        </>
    )
};
