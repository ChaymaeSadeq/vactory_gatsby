import React, {useState, useEffect, useRef} from "react"
import Api from "vactory-gatsby-api"
import {postsQueryParams} from 'vactory-gatsby-blog'
import {normalizeNodes, normalizeTerms} from '../internal/normalizers'

import PostsPage from "./posts"
import PostsFormFilter from "./posts.form.filter";

const PostsContainer = ({pageContext: {node, nodes, terms}}) => {
    const normalizedCategories = normalizeTerms(terms);
    const normalizedNodes = normalizeNodes(nodes);

    const isFirstRun = useRef(true);
    const [posts, setPosts] = useState(normalizedNodes);
    const [selectedTerm, setSelectedTerm] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (tid) => {
        setSelectedTerm(tid);
    };

    useEffect(() => {
            if (isFirstRun.current) {
                isFirstRun.current = false;
                return;
            }

            function fetchData() {
                let categoryFilter = {
                    "filter[category][condition][path]": "field_vactory_taxonomy_1.drupal_internal__tid",
                    "filter[category][condition][operator]": "=",
                    "filter[category][condition][value]": selectedTerm,
                };

                if (selectedTerm === "all") {
                    categoryFilter = {}
                }

                const requestParams = {
                    ...postsQueryParams,
                    ...categoryFilter
                };

                setIsLoading(true);

                Api.get('node/blog', requestParams, node.langcode).then(data => {
                    const normalizedNodes = normalizeNodes(data);
                    setPosts(normalizedNodes);
                    setIsLoading(false);
                }).catch(err => {
                    setIsLoading(false);
                    console.log(err)
                });
            }

            fetchData()
        }, [selectedTerm, node.langcode],
    );

    return (
        <div>
            <h1>Blogs</h1>
            {isLoading && <h3>Loading...</h3>}
            {!isLoading && posts.length <= 0 && <h3>Aucun résultat.</h3>}
            <PostsFormFilter terms={normalizedCategories} value={selectedTerm} handleChange={handleChange}/>
            {posts.length > 0 && <PostsPage posts={posts}/>}
        </div>
    )
};

export default PostsContainer
