import React, {Fragment} from "react"

const Posts = ({posts}) => {
    return (
        <div>
            <main>
                {posts.map(node => {
                    const title = node.title;

                    return (
                        <Fragment key={node.id}>
                            <div>
                                <h2
                                >
                                    {title}
                                </h2>
                                <small>{node.date}</small>
                                <p>{node.excerpt}</p>
                            </div>
                        </Fragment>
                    )
                })}
            </main>
        </div>
    )
};

export default Posts
