// These templates are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/components/post.container`)
const PostsTemplate = require.resolve(`./src/components/posts.container`)

exports.createPages = async ({actions}) => {
    const {createPage} = actions

    // Create the Post page
    createPage({
        path: '/post/article-a',
        component: PostTemplate,
        context: {
            post: {
                id: 1,
                title: "Article A",
                date: "20-20-2020",
                excerpt: "This an excerpt text.",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus doloribus itaque, maxime nam optio possimus ratione unde veniam voluptates!\n",
            }
        },
    })

    createPage({
        path: '/post/article-b',
        component: PostTemplate,
        context: {
            post: {
                id: 2,
                title: "Article B",
                date: "04-01-2020",
                excerpt: "This an excerpt text.",
                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus doloribus itaque, maxime nam optio possimus ratione unde veniam voluptates!\n",
            }
        },
    })

    // Create the Posts page
    createPage({
        path: '/posts',
        component: PostsTemplate,
        context: {
            posts: [
                {
                    id: 1,
                    title: "Article A",
                    date: "20-20-2020",
                    excerpt: "This an excerpt text.",
                },
                {
                    id: 2,
                    title: "Article B",
                    date: "04-01-2020",
                    excerpt: "This an excerpt text.",
                }
            ]
        },
    })
}
