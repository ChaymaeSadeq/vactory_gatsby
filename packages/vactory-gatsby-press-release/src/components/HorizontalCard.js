import React from "react";
import { useImageStyle } from "vactory-gatsby-ui";

export const HorizontalCard = ({ title, date, category, excerpt, file, url, image, imageSettings }) => {
	const styledImage = useImageStyle("press_release_image_546_358")(image);
	return (
		<div className="max-w-md mx-auto bg-white dark:bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="h-48 w-full object-cover md:w-64 md:h-full lg:w-80"
						src={styledImage}
						alt={title}
					/>
				</div>
				<div className="p-8">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
						{category}
					</div>
					<p className="mt-2 text-sm text-gray-500">
						<time dateTime={date}>{date}</time>
					</p>
					<a href={url} className="mt-2 block">
						<h3 className="text-xl leading-tight font-semibold text-black dark:text-white hover:underline">
							{title}
						</h3>
						<div className="mt-3 text-base text-gray-500 dark:text-gray-400">
							{excerpt}
						</div>
					</a>
					<div className="mt-3">
						<a
							href={file}
							className="text-base font-semibold text-indigo-600 hover:text-indigo-500 hover:underline"
						>
							Télécharger le document
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}