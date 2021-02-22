import React from "react";
import { Picture } from "vactory-gatsby-ui";


const dateFOrmAt = (date) => {
	if (!date) {
		return "";
	}
	var mS = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const x = date.split("-");
	const months = parseInt(x[1]);
	x[1] = mS[months - 1];
	return x;
};

export const EventCard = ({
	title,
	excerpt,
	image,
	url,
	category,
	city,
	imageSettings,
	dateInterval,
}) => {

	const startDate = dateFOrmAt(dateInterval.value);
	const endDate = dateFOrmAt(dateInterval.end_value);
	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden relative">
			<div className="rounded-xl shadow-md bg-red-500 text-white flex flex-col space-y-0.5 absolute ltr:right-2 rtl:left-2 top-3 w-16 text-center font-bold z-1">
				<span className="">{startDate[2]}</span>
				<span className="text-lg">{startDate[1]}</span>
				<span>-</span>
				<span className="">{endDate[2]}</span>
				<span className="text-lg">{endDate[1]}</span>
			</div>
			<div className="flex-shrink-0">
				<a href={url}>
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
				</a>
			</div>
			<div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
				<div className="flex-1">
					<p className="text-sm font-medium space-x-3 rtl:space-x-reverse">
						<a
							href="#!"
							className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-800"
						>
							{category}
						</a>
						<a
							href="#!"
							className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-100 text-red-800"
						>
							{city}
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
				{/*<div className="mt-6 flex items-center">
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
				</div>*/}
			</div>
		</div>
	);
};
