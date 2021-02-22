import React, {Fragment} from "react"
import {Link} from "gatsby"

const Posts = ({posts}) => {
    return (
        <article>
            {posts.map(node => {
                const title = node.title;
                const url = node.url;

                return (
                    <Fragment key={node.id}>
                        <div>
                            <h3
                            >
                                {title}
                            </h3>
                            <small>{node.date}</small>
                            <p>{node.excerpt}</p>
                            <Link to={url}>Read more</Link>
                        </div>
                    </Fragment>
                )
            })}
        </article>
    )
};

export default Posts
