import React from "react";
import { Wysiwyg } from "vactory-gatsby-ui";

const Posts = ({ posts }) => {
  return (
		<div className="bg-white overflow-hidden shadow rounded-lg">
      <dl>
        {posts.map((node, index) => (
            <div key={node.id} className={`${ index % 2 === 0 ? "bg-white" : "bg-gray-50" } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
              <dt className="text-sm font-medium text-gray-500">
                {node.title}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Wysiwyg html={node.excerpt} />
              </dd>
            </div>
          ))}
      </dl>
		</div>
  );
};

export default Posts;
