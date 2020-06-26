import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import { Heading, Container, Paragraph } from "vactory-ui";
import { LoadingOverlay } from "vactory-gatsby-ui";
import {
  postsQueryParams,
  normalizeNodes,
  normalizeTerms,
  PostsPage,
  PostsFormFilter,
} from "vactory-gatsby-events";

const PostsContainer = ({
  pageContext: { node, nodes, terms, cities, pageCount },
}) => {
  const { t } = useTranslation();
  const normalizedCategories = normalizeTerms(terms);
  const normalizedCities = normalizeTerms(cities);
  const normalizedNodes = normalizeNodes(nodes);
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

      Api.getResponse("node/events", requestParams, node.langcode)
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
  }, [selectedTerm, selectedCity, node.langcode, pager]);

  return (
    <Container>
      <Heading px="xsmall" level={2}>
        {t("Events")}
      </Heading>
      <PostsFormFilter
        cities={normalizedCities}
        terms={normalizedCategories}
        value={selectedTerm}
        handleChangeCategory={handleChangeCategory}
        handleChangeCity={handleChangeCity}
      />
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
    </Container>
  );
};

export default PostsContainer;
