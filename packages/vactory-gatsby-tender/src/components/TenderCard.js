import React from "react";
import { Picture, Link } from "vactory-gatsby-ui";

export const TenderCard = ({ title, excerpt, image, url, reference, imageSettings, date }) => {
  const formUrl = url + "/form/";

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
					<Link href={url} className="text-lg">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							{title}
						</h3>
					</Link>
					<p className="mt-3 text-sm font-medium space-x-3 rtl:space-x-reverse">
						<div className="bg-gray-100 border border-gray-500 inline-flex items-center rounded-sm text-xs">
							<span className="text-white bg-gray-500 ltr:rounded-l-sm rtl:rounded-l-sm py-1 px-2">REF:</span>
							<span className="font-mono select-all px-2">{reference}</span>
						</div>
						<span className="text-gray-500 italic">{date}</span>
					</p>
					<p className="mt-3 text-base text-gray-500 dark:text-gray-400">
						{excerpt}
					</p>
				</div>
				<div className="mt-6 flex items-center">
					<Link
						href={formUrl}
						className="inline-flex items-center border border-indigo-500 px-3 py-2 text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-4 w-4 ltr:mr-2 rtl:ml-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						Télécharger le dossier
					</Link>
				</div>
			</div>
		</div>
	);
};
