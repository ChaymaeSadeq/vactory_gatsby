import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import { Heading, Container, Paragraph } from "vactory-ui";
import {LoadingOverlay, Pagination} from "vactory-gatsby-ui";
import {
  postsQueryParams,
  normalizeNodes,
  normalizeDFNodes,
  PostsPage,
  PostsFormFilter,
} from "vactory-gatsby-events";

const PostsContainer = ({ nodes, categories, cities, pageCount }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const normalizedNodes = normalizeDFNodes(nodes);
  const isFirstRun = useRef(true);
  const [posts, setPosts] = useState(normalizedNodes);
  const [selectedTerm, setSelectedTerm] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [pager, setPager] = useState(1);
  const [count, setCount] = useState(pageCount);
  const handlePaginationChange = (selected) => {
    setPager(selected);
  };

  const handleChangeCategory = (tid) => {
    setSelectedTerm(tid);
    setPager(1);
  };

  const handleChangeCity = (tid) => {
    setSelectedCity(tid);
    setPager(1);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    function fetchData() {
      let categoryFilter = {
        "filter[category][condition][path]":
          "field_vactory_taxonomy_1.drupal_internal__tid",
        "filter[category][condition][operator]": "=",
        "filter[category][condition][value]": selectedTerm,
      };

      let cityFilter = {
        "filter[city][condition][path]":
          "field_vactory_taxonomy_2.drupal_internal__tid",
        "filter[city][condition][operator]": "=",
        "filter[city][condition][value]": selectedCity,
      };

      if (selectedTerm === "all") {
        categoryFilter = {};
      }

      if (selectedCity === "all") cityFilter = {};

      const requestParams = {
        ...postsQueryParams,
        page: {
          limit: postsQueryParams.page.limit,
          offset: (pager - 1) * postsQueryParams.page.limit,
        },
        ...categoryFilter,
        ...cityFilter,
      };

      setIsLoading(true);

      Api.getResponse("node/events", requestParams, currentLanguage)
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
  }, [selectedTerm, selectedCity, currentLanguage, pager]);

  return (
    <Container>
      <Heading px="xsmall" level={2}>
        {t("Events")}
      </Heading>
      <PostsFormFilter
        cities={cities}
        terms={categories}
        value={selectedTerm}
        handleChangeCategory={handleChangeCategory}
        handleChangeCity={handleChangeCity}
      />
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && (
          <PostsPage posts={posts} />
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
