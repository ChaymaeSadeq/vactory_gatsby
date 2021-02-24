import React, { useState, useEffect, useRef } from "react";
import get from 'lodash.get';
import { LoadingOverlay, Pagination } from "vactory-gatsby-ui";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import {
    postsQueryParams,
    normalizeNodes,
    normalizeDFNodes,
} from "vactory-gatsby-faq";

export const ListContainer = ({ data }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const pageCount = get(data, 'components.0.views.data.count', 0);
    const terms = get(data, 'components.0.views.data.exposed.faq_section', []);
    const isFirstRun = useRef(true);
    const normalizedNodes = normalizeDFNodes(nodes);
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState(normalizedNodes);
    const [selectedTerm, setSelectedTerm] = useState("all");
    const [pager, setPager] = useState(1);
    const [count, setCount] = useState(pageCount);
    const [selected, setSelected] = useState(-1)

    const fetchData = () => {
        let categoryFilter = {
            "filter[category][condition][path]": "field_vactory_taxonomy_1.drupal_internal__tid",
            "filter[category][condition][operator]": "=",
            "filter[category][condition][value]": selectedTerm,
        };

        if (selectedTerm === "all") {
            categoryFilter = {};
        }

        const requestParams = {
            ...postsQueryParams,
            page: { limit: postsQueryParams.page.limit, offset: (pager - 1) * postsQueryParams.page.limit },
            ...categoryFilter,
        };

        setIsLoading(true);

        Api.getResponse("node/faq", requestParams, currentLanguage)
            .then((res) => {
                const normalizedNodes = normalizeNodes(res.data);
                setPosts(normalizedNodes);
                setIsLoading(false);
                setCount(res.meta.count);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    }

    const handleTermChange = (event) => {
        setSelectedTerm(event.target.value);
    };

    const handlePaginationChange = (selected) => {
        setPager(selected);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData();
    }

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        fetchData();
    }, [pager])

    return (
        <div className="container">

            <div>
                <form className="mt-8 sm:flex sm:items-center mb-10" onSubmit={handleSubmit}>
                    <label htmlFor="section" className="text-sm font-medium pr-4 text-gray-700">{t('Thématique')}</label>
                    <select
                        id="section"
                        name="section"
                        className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedTerm}
                        onChange={handleTermChange}
                    >
                        <option value="all">{t("Toutes les thématiques")}</option>
                        {terms.map((term) => (
                            <option key={term.id} value={term.id}>
                                {term.label}
                            </option>
                        ))}
                    </select>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {t('Appliquer')}
                        </button>
                    </div>
                </form>
            </div>

            <LoadingOverlay active={isLoading}>
                {posts.length > 0 && (
                    <div>
                        {posts.map(post => {
                            return (
                                <div key={post.id} className="bg-gray-50 mb-10">
                                    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                                        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                                {post.title}
                                            </h2>
                                            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                                                {post.questions.map(({ question, answer }, index) => {
                                                    const questionKey = `faq-${post.id}-${index}`
                                                    let isSelected = selected !== false && questionKey === selected

                                                    return (
                                                        <div key={questionKey} className="pt-6">
                                                            <dt className="text-lg">
                                                                <button
                                                                    onClick={() =>
                                                                        setSelected(selected === questionKey ? false : questionKey)
                                                                    }
                                                                    className="text-left w-full flex justify-between items-start text-gray-400">
                                                                    <span className="font-medium text-gray-900">
                                                                        {question}
                                                                    </span>
                                                                    <span className="ml-6 h-7 flex items-center">
                                                                        <svg
                                                                            className={`${isSelected ? "rotate-0" : "-rotate-90"
                                                                                } h-6 w-6 transform`}
                                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </dt>
                                                            <dd className={`${isSelected ? "block" : "hidden"} mt-2 pr-12`}>
                                                                <p className="text-base text-gray-500">{answer}</p>
                                                            </dd>
                                                        </div>
                                                    )
                                                })}
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                {!isLoading && posts.length <= 0 && (
                    <p className="text-center my-8">
                        {t("Aucun résultat trouvé")}
                    </p>
                )}
            </LoadingOverlay>
            {count > postsQueryParams.page.limit && (
                <Pagination
                    total={count}
                    pageSize={postsQueryParams.page.limit}
                    current={pager}
                    onChange={handlePaginationChange}
                />
            )}

        </div>)
};
