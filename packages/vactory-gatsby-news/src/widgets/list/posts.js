import React from "react";
import { NewsCard, imageLayoutStyles } from "vactory-gatsby-news";

const Posts = ({ posts }) => {
    // console.log(posts)
  return (
		<div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
			{posts.map((node) => (
					<React.Fragment key={node.id}>
						<NewsCard
							{...node}
							imageSettings={imageLayoutStyles.threeColumns}
						/>
					</React.Fragment>
				))}
		</div>
  );
};

export default Posts;
