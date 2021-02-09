import React from "react";
import { useTranslation } from "react-i18next";
import { Picture } from "vactory-gatsby-ui";
import { Link } from "vactory-gatsby-ui";

export const PresseKitCard = ({
	title,
	excerpt,
	image,
	file,
	category,
	imageSettings,
}) => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
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
			<div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
				<div className="flex-1">
					<p className="text-sm font-medium space-x-2 rtl:space-x-reverse">
						<a
							href="#!"
							className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200"
						>
							{category}
						</a>
					</p>
					<div className="mt-2">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							{title}
						</h3>
						<p className="mt-3 text-base text-gray-500 dark:text-gray-400">
							{excerpt}
						</p>
					</div>
				</div>
				<div className="mt-6 flex items-center">
					<Link
						href={file}
						download
						target="_blank"
						className="inline-flex items-center border border-indigo-500 shadow-sm px-3 py-2 text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{t("Télécharger le document")}
					</Link>

					{/* 
					<div className="flex-shrink-0">
						<a href="#!">
							<span className="sr-only">Brenna Goyette</span>
							<img
								className="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</a>
					</div>
					<div className="ltr:ml-3 rtl:mr-3">
						<p className="text-sm font-medium text-gray-900  dark:text-gray-200">
							<a href="#!" className="hover:underline">
								Brenna Goyette
							</a>
						</p>
						<div className="flex rtl:space-x-reverse space-x-1 text-sm text-gray-500">
							<time dateTime="2020-03-10">Mar 10, 2020</time>
							<span aria-hidden="true">&middot;</span>
							<span>4 min read</span>
						</div>
					</div>
				 */}
				</div>
			</div>
		</div>
	);
};
