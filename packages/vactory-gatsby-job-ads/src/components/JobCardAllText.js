import React from "react";
import { Link } from "vactory-gatsby-ui";

export const AllTextCard = ({url, title, date, city, profession, profileDescription}) => {
	return (
		<div>
			<div className="rtl:space-x-reverse space-x-3">
				<Link href="#!" className="inline-block">
					<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
						{city}
					</span>
				</Link>
				<Link href="#!" className="inline-block">
					<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
						{profession}
					</span>
				</Link>
			</div>
			<p className="mt-2 text-sm text-gray-500">
				<time dateTime={date}>{date}</time>
			</p>
			<a href={url} className="mt-2 block">
				<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
					{title}
				</h3>
				<div className="mt-3 text-base text-gray-500">
					{profileDescription}
				</div>
			</a>
			<div className="mt-3">
				<a
					href={url}
					className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
				>
					See the full ad
				</a>
			</div>
		</div>
	);
}