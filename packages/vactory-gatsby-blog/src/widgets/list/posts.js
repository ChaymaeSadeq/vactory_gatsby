import React from "react";
import { BlogCard, imageLayoutStyles } from "vactory-gatsby-blog";

const Posts = ({ posts }) => {
  return (
		<div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
			{posts.map((node) => (
				<BlogCard
					key={node.id}
					{...node}
					imageSettings={imageLayoutStyles.threeColumns}
				/>
			))}
		</div>
  );
};

export default Posts;
