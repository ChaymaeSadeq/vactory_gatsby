import React from 'react'
import { AllTextCard } from "vactory-gatsby-job-ads";

const Posts = ({ posts }) => {
  return (			
			<>
				{posts.map((node) => (
					<AllTextCard key={node.id} {...node} />
				))}
			</>
  );
}

export default Posts
