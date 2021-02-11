import React from "react";
import { Picture, Link } from "vactory-gatsby-ui";

export const ReleaseCard = ({ title, excerpt, image, url, category, imageSettings, file, date }) => {

	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
			{image && (
				<div className="flex-shrink-0">
					{imageSettings && (
						<Picture
							file={image}
							sizes={imageSettings.sizes}
							alt={title}
							width={imageSettings.width}
							height={imageSettings.height}
							ratio={imageSettings.ratio}
							className="h-48 w-full object-cover"
						/>
					)}
					{!imageSettings && (
						<img
							className="h-48 w-full object-cover"
							src={image?._default}
							alt={title}
						/>
					)}
				</div>
			)}
			<div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
				<div className="flex-1">
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
						{title}
					</h3>
					<p className="mt-2 text-sm font-medium space-x-3 rtl:space-x-reverse">
						<span className="text-white bg-indigo-500 rounded-sm py-1 px-2">
							{category}
						</span>
					</p>
					<div className="mt-3 text-base text-gray-500 dark:text-gray-400">
						{excerpt}
					</div>
				</div>
				<div className="mt-6 flex items-center">
					<Link
						download
						href={file}
						className="inline-flex items-center border border-indigo-500 px-3 py-2 text-sm leading-4 font-medium rounded-md text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Télécharger le document
					</Link>
				</div>
			</div>
		</div>
	);
};
