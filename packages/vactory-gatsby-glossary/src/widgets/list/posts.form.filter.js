import React from "react";

const PostsFormFilter = ({alphabet, handleChange}) => {

    return (
		<div className="mb-10 flex rounded-md shadow border border-gray-100 bg-gradient-to-b from-white via-gray-300 to-white space-x-px rtl:space-x-reverse">
			{alphabet.map((node) => {
				return (
					<button
						key={node}
						onClick={() => handleChange(node)}
						className="w-11 h-11 flex-1 rounded-md bg-white hover:bg-gray-100"
					>
						{node}
					</button>
				);
			})}
		</div>
	);
};

export default PostsFormFilter;
