import React from 'react'
import { Link, useImageStyle } from "vactory-gatsby-ui";

export const NextPreCard = ({ title, body, image, url, direction = 'left' }) => {
    const isr = direction === "right" ? true : false;
    const styledImage = useImageStyle("next_prev_image_114_114")(image);
    return (
		<Link
			className={`group flex absolute top-1/2 transform -translate-y-1/2 bg-green-300 bg-opacity-50 ${
				isr ? "flex-row-reverse right-0" : "flex-row left-0"
			}`}
			href={url}
		>
			<div className="relative px-3 py-16 z-1">
				<svg
					className={`w-6 h-6 text-green-800 ${
						isr ? "" : "transform -scale-x-100"
					}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					width={24}
					height={24}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
				<div
					className={`absolute inset-0 bg-black -z-1 transition duration-300 delay-300 group-hover:delay-none transform group-hover:translate-x-0 ${
						isr ? "translate-x-full" : "-translate-x-full"
					}`}
				/>
			</div>
			<div
				style={{ minWidth: 420 }}
				className={`absolute inset-y-0 ${
					isr
						? "right-0 rounded-l-md pr-12 translate-x-full "
						: "left-0 rounded-r-md  pl-12 -translate-x-full"
				} bg-black text-green-50 transition duration-300 group-hover:delay-300 transform group-hover:translate-x-0 p-5 grid grid-cols-5 grid-rows-2`}
			>
				<div
					className={`col-span-3 row-start-1 border-b border-green-100 flex items-end justify-end pb-1.5 mr-3`}
				>
					<p className="font-medium text-green-300">{title}</p>
				</div>
				<div
					className={`col-span-3 row-start-2 flex items-start justify-end pt-2 mr-3`}
				>
					<span className="text-xs uppercase text-green-100 opacity-50">
						{body}
					</span>
				</div>
				<div
					className={`col-start-4 col-span-2 row-span-2 justify-self-end`}
				>
					<img
						src={styledImage}
						className="w-28 h-28 border-4 border-green-300"
						alt={title}
						width="114"
						height="114"
					/>
				</div>
			</div>
		</Link>
	);
}