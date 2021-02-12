import React from 'react'
import {useTranslation} from "react-i18next";

export const LoginButton = ({login}) => {
    const {t} = useTranslation();

    return (
    <div className="ml-2.5">
		<a
			className="border-indigo-700 border-2 rounded-full md:rounded-md flex p-2 text-indigo-700 hover:bg-indigo-50"
			href={login}
		>
			<svg
				className="md:mr-1.5 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				width={20}
				height={20}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
				/>
			</svg>
			<span className="hidden md:inline">{t("Se connecter")}</span>
        </a>
    </div>
	);
};
