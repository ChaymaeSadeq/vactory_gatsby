import React, {useState, useEffect, useRef} from "react"
import {useTranslation} from "react-i18next"
import Api from "vactory-gatsby-api"
import {postsQueryParams, normalizeNodes, normalizeTerms, PostsPage, PostsFormFilter} from 'vactory-gatsby-job-ads'

const PostsContainer = ({pageContext: {node, nodes, cities, contracts, professions}}) => {
    const {t} = useTranslation();

    const normalizedCities = normalizeTerms(cities);
    const normalizedContracts = normalizeTerms(contracts);
    const normalizedProfessions = normalizeTerms(professions);
    const normalizedNodes = normalizeNodes(nodes);

    const isFirstRun = useRef(true);
    const [posts, setPosts] = useState(normalizedNodes);
    const [selectedCity, setSelectedCity] = useState("all");
    const [selectedContract, setSelectedContract] = useState("all");
    const [selectedProfession, setSelectedProfession] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeCity = (tid) => {
        setSelectedCity(tid);
    };

    const handleChangeContract = (tid) => {
        setSelectedContract(tid);
    }

    const handleChangeProfession = (tid) => {
        setSelectedProfession(tid);
    }

    useEffect(() => {
            if (isFirstRun.current) {
                isFirstRun.current = false;
                return;
            }

            function fetchData() {
                let cityFilter = {
                    "filter[city][condition][path]": "field_vactory_taxonomy_1.drupal_internal__tid",
                    "filter[city][condition][operator]": "=",
                    "filter[city][condition][value]": selectedCity,
                };
                let contractFilter = {
                    "filter[contract][condition][path]": "field_vactory_taxonomy_2.drupal_internal__tid",
                    "filter[contract][condition][operator]": "=",
                    "filter[contract][condition][value]": selectedContract,
                };
                let professionFilter = {
                    "filter[profession][condition][path]": "field_vactory_taxonomy_3.drupal_internal__tid",
                    "filter[profession][condition][operator]": "=",
                    "filter[profession][condition][value]": selectedProfession,
                };

                if(selectedCity === "all")
                    cityFilter = {};
                if(selectedContract === "all")
                    contractFilter = {};
                if(selectedProfession === "all")
                    professionFilter = {};

                const requestParams = {
                    ...postsQueryParams,
                    ...cityFilter,
                    ...contractFilter,
                    ...professionFilter,
                };

                setIsLoading(true);

                Api.get('node/job_ads', requestParams, node.langcode).then(data => {
                    const normalizedNodes = normalizeNodes(data);
                    setPosts(normalizedNodes);
                    setIsLoading(false);
                }).catch(err => {
                    setIsLoading(false);
                    console.log(err)
                });
            }

            fetchData()
        }, [selectedCity, selectedContract, selectedProfession, node.langcode],
    );

    return (
        <div>
            <h1>{t('Job Ads')}</h1>
            {isLoading && <h3>Loading...</h3>}
            {!isLoading && posts.length <= 0 && <h3>{t('Aucun résultat.')}</h3>}
            <PostsFormFilter cities={normalizedCities} contracts={normalizedContracts} professions={normalizedProfessions} value={selectedCity} handleChangeCity={handleChangeCity} handleChangeContract={handleChangeContract} handleChangeProfession={handleChangeProfession}/>
            {posts.length > 0 && <PostsPage posts={posts}/>}
        </div>
    )
};

export default PostsContainer
