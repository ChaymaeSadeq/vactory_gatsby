import React, {useState, useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import Api from "vactory-gatsby-api";
import {Container, Paragraph} from "vactory-ui";
import {LoadingOverlay, Pagination} from "vactory-gatsby-ui";
import {
    postsQueryParams,
    normalizeNodes,
    normalizeDFNodes,
    PostsPage,
} from "vactory-gatsby-tender";

const PostsContainer = ({nodes, pageCount}) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const normalizedNodes = normalizeDFNodes(nodes);
    const isFirstRun = useRef(true);
    const [posts, setPosts] = useState(normalizedNodes);
    const [isLoading, setIsLoading] = useState(false);
    const [pager, setPager] = useState(1);
    const [count, setCount] = useState(pageCount);
    const handlePaginationChange = (selected) => {
        setPager(selected);
    };

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        function fetchData() {
            const requestParams = {
                ...postsQueryParams,
                page: {
                    limit: postsQueryParams.page.limit,
                    offset: (pager - 1) * postsQueryParams.page.limit,
                },
            };

            setIsLoading(true);

            Api.getResponse("node/tender", requestParams, currentLanguage)
                .then((res) => {
                    const normalizedNodes = normalizeNodes(res.data);
                    setPosts(normalizedNodes);
                    const total = res.meta.count;
                    setCount(total);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    console.log(err);
                });
        }

        fetchData();
    }, [currentLanguage, pager]);

    return (
        <Container>
            <LoadingOverlay active={isLoading}>
                {posts.length > 0 && (
                    <PostsPage
                        count={count}
                        current={pager}
                        onChange={handlePaginationChange}
                        posts={posts}
                    />
                )}
                {!isLoading && posts.length <= 0 && (
                    <Paragraph my="medium" textAlign="center">
                        {t("Aucun résultat trouvé")}
                    </Paragraph>
                )}
            </LoadingOverlay>
            {count > postsQueryParams.page.limit && (
                <Pagination
                    total={count}
                    defaultPageSize={postsQueryParams.page.limit}
                    pageSize={postsQueryParams.page.limit}
                    current={pager}
                    onChange={handlePaginationChange}
                />
            )}
        </Container>
    );
};

export default PostsContainer;
