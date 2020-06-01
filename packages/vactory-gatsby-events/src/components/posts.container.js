import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import {
  postsQueryParams,
  normalizeNodes,
  normalizeTerms,
  PostsPage,
  PostsFormFilter,
} from "vactory-gatsby-events";

const PostsContainer = ({ pageContext: { node, nodes, terms, cities } }) => {
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
  const [count, setCount] = useState(0);

  const handlePaginationChange = (selected) => {
    setPager(selected);
  };

  const handleChangeCategory = (tid) => {
    setSelectedTerm(tid);
  };

  const handleChangeCity = (tid) => {
    setSelectedCity(tid);
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
        page: { limit: 4, offset: (pager - 1) * 4 },
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
    <div>
      <h1>{t("Events")}</h1>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && posts.length <= 0 && <h3>{t("Aucun résultat.")}</h3>}
      <PostsFormFilter
        terms={normalizedCategories}
        cities={normalizedCities}
        value={selectedTerm}
        handleChangeCategory={handleChangeCategory}
        handleChangeCity={handleChangeCity}
      />
      {posts.length > 0 && (
        <PostsPage
          count={count}
          posts={posts}
          current={pager}
          onChange={handlePaginationChange}
        />
      )}
    </div>
  );
};

export default PostsContainer;
