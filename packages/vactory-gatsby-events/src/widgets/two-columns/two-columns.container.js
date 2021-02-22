import React from "react";
import get from "lodash.get";
import { Wysiwyg } from "vactory-gatsby-ui";
import { Link } from "vactory-gatsby-ui";
import { EventCard, normalizeDFNodes, imageLayoutStyles } from "vactory-gatsby-events";

export const TwoColumnsContainer = ({ data }) => {
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const title = get(data, "components.0.title", "");
  const raw_description = get(
    data,
    "components.0.description.value.#text",
    null
  );
  const description = <Wysiwyg html={raw_description} />;
  const link = get(data, "components.0.link.url", null);
  const link_label = get(data, "components.0.link.title", "");
  const posts = normalizeDFNodes(nodes, 200);

  return (
		<div className="my-10">
			<div className="text-center">
				{title && (
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
						{title}
					</h2>
				)}
				{raw_description.length > 0 && (
					<div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
						{description}
					</div>
				)}
			</div>
			<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
				{posts.map((post) => (
					<EventCard
						{...post}
						imageSettings={imageLayoutStyles.twoColumns}
					/>
				))}
			</div>
			{link && (
				<div className="flex justify-center mt-12">
					<Link
						href={link}
						className="inline-flex items-center border border-gray-300 shadow-sm px-6 py-3 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{link_label}
					</Link>
				</div>
			)}
		</div>
  );
};
