import React from "react"
import {useTranslation} from "react-i18next"
import {Link} from 'vactory-gatsby-ui'

const Post = ({post}) => {
    const formUrl = post.path.alias + '/form/';
    const {t} = useTranslation();
    return (
		<article>
			<h2>{post.title}</h2>
			{/*<p>*/}
			{/*    {post.date}*/}
			{/*</p>*/}
			{/*<div>{post.body}</div>*/}
			<Link
				className="inline-flex items-center border border-transparent px-3 py-2 text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				to={formUrl}
			>
				{t("Postuler")}
			</Link>
		</article>
	);
}

export default Post
