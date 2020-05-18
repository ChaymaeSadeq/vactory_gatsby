import React, {Fragment} from "react"
import {Link} from "gatsby"

const Posts = ({posts}) => {
    return (
        <div>
            <main>
                {posts.map(node => {
                    const title = node.title;
                    const url = node.url;

                    return (
                        <Fragment key={node.id}>
                            <div>
                                <h2
                                >
                                    {title}
                                </h2>
                                <small>{node.date}</small>
                                <p>{node.jobDescription}</p>
                                <Link to={url}>Read more</Link>
                            </div>
                        </Fragment>
                    )
                })}
            </main>
        </div>
    )
};

export default Posts
