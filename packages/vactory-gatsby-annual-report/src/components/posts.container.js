import React, {useState, useEffect, useRef} from "react"
import { useTranslation } from "react-i18next"
import Api from "vactory-gatsby-api"
import {postsQueryParams, normalizeNodes, normalizeTerms, PostsPage, PostsFormFilter} from 'vactory-gatsby-annual-report'

const PostsContainer = ({pageContext: {node, nodes, terms, mediatype}}) => {
    const { t } = useTranslation();

    const normalizedCategories = normalizeTerms(terms);
    const normalizedNodes = normalizeNodes(nodes);
    const normalizedMediaType = normalizeTerms(mediatype);

    const isFirstRun = useRef(true);
    const [posts, setPosts] = useState(normalizedNodes);
    const [selectedTerm, setSelectedTerm] = useState("all");
    const [selectedMediaType, setSelectedMediaType] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeThematic = (tid) => {
        setSelectedTerm(tid);
    };

    const handleChangeMediaType = (tid) => {
        setSelectedMediaType(tid);
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

                let mediatypefilter = {
                    "filter[city][condition][path]": "field_vactory_taxonomy_2.drupal_internal__tid",
                    "filter[city][condition][operator]": "=",
                    "filter[city][condition][value]": selectedMediaType,
                };

                if (selectedTerm === "all") {
                    categoryFilter = {}
                }

                if (selectedMediaType === "all")
                    mediatypefilter = {}

                const requestParams = {
                    ...postsQueryParams,
                    ...categoryFilter,
                    ...mediatypefilter
                };

                setIsLoading(true);

                Api.get('node/vactory_annual_report', requestParams, node.langcode).then(data => {
                    const normalizedNodes = normalizeNodes(data);
                    setPosts(normalizedNodes);
                    setIsLoading(false);
                }).catch(err => {
                    setIsLoading(false);
                    console.log(err)
                });
            }

            fetchData()
        }, [selectedTerm, selectedMediaType, node.langcode],
    );

    return (
        <div>
            <h1>{t('Annual Report')}</h1>
            {isLoading && <h3>Loading...</h3>}
            {!isLoading && posts.length <= 0 && <h3>{t('Aucun résultat.')}</h3>}
            <PostsFormFilter terms={normalizedCategories} mediatype={normalizedMediaType} value={selectedTerm} handleChangeThematic={handleChangeThematic} handleChangeMediaType={handleChangeMediaType}/>
            {posts.length > 0 && <PostsPage posts={posts}/>}
        </div>
    )
};

export default PostsContainer
