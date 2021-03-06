import React from "react";
import { Link, Picture } from "vactory-gatsby-ui";

export const BlogCard = ({
	title,
	excerpt,
	image,
	url,
	category,
	imageSettings,
}) => {
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
					<p className="text-sm font-medium text-indigo-600">
						<Link href="#!" className="hover:underline">
							{category}
						</Link>
					</p>
					<Link href={url} className="block mt-2">
						<p className="text-xl font-semibold text-gray-900 dark:text-white">
							{title}
						</p>
						<p className="mt-3 text-base text-gray-500 dark:text-gray-400">
							{excerpt}
						</p>
					</Link>
				</div>
				<div className="mt-6 flex items-center">
					<div className="flex-shrink-0">
						<Link href="#!">
							<span className="sr-only">Brenna Goyette</span>
							<img
								className="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</Link>
					</div>
					<div className="ltr:ml-3 rtl:mr-3">
						<p className="text-sm font-medium text-gray-900  dark:text-gray-200">
							<Link href="#!" className="hover:underline">
								Brenna Goyette
							</Link>
						</p>
						<div className="flex rtl:space-x-reverse space-x-1 text-sm text-gray-500">
							<time dateTime="2020-03-10">Mar 10, 2020</time>
							<span aria-hidden="true">&middot;</span>
							<span>4 min read</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
