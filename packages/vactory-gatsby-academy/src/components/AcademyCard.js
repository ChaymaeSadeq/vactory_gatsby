import React from "react";
import { useTranslation } from "react-i18next";
import { Picture } from "vactory-gatsby-ui";

export const AcademyCard = ({
	title,
	excerpt,
	image,
	url,
	category,
	imageSettings,
	date,
	instructor,
	duration,
}) => {
	const { i18n: { language: lang } } = useTranslation();
	const humanDate = Intl.DateTimeFormat(lang, { dateStyle: "full" })
						.format(new Date(date.timestamp));
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
					<p className="text-sm font-medium">
						<a
							href="#!"
							className="inline-flex items-center px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800"
						>
							{category?.label}
						</a>
					</p>
					<a href={url} className="block mt-2">
						<p className="text-xl font-semibold text-gray-900 dark:text-white">
							{title}
						</p>
						<p className="mt-3 text-base text-gray-500 dark:text-gray-400">
							{excerpt}
						</p>
					</a>
				</div>
				<div className="mt-6 flex items-center flex-wrap">
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
						<time
							className="text-sm text-gray-500"
							dateTime={date.html_datetime}
						>
							{humanDate}
						</time>
					</div>
					{duration && (
						<div className="text-sm text-gray-500 flex-auto w-full mt-6 flex items-center">
							<svg
								className="w-4 h-4 inline ltr:mr-1 rtl:ml-1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Durée: {duration}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
