import React from "react";
import { useImageStyle } from "vactory-gatsby-ui";

export const GovernorCard = (props) => {
	const title = props.title;
	const role_title = props?.role?.label || "unspecified";
	const image = props?.image || {
		_default: "https://www.svgrepo.com/show/170303/avatar.svg",
	};
	const styledImage = useImageStyle("gouvernance_avatar_200_200")(image);

	return (
		<div className="space-y-4 text-center">
			<img
				className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
				src={styledImage}
				alt={title + " - " + role_title}
			/>
			<div className="space-y-2">
				<div className="text-xs font-medium lg:text-sm">
					<h3>{title}</h3>
					<p className="text-indigo-600">{role_title}</p>
				</div>
			</div>
		</div>
	);
};
