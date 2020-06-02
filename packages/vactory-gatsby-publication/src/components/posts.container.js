import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import {
  postsQueryParams,
  normalizeNodes,
  normalizeTerms,
  PostsPage,
  PostsFormFilter,
} from "vactory-gatsby-publication";
import { Heading } from "vactory-ui";

const PostsContainer = ({ pageContext: { pageCount, node, nodes, terms } }) => {
  const { t } = useTranslation();

  const normalizedCategories = normalizeTerms(terms);
  const normalizedNodes = normalizeNodes(nodes);

  const isFirstRun = useRef(true);
  const [count, setCount] = useState(pageCount);
  const [posts, setPosts] = useState(normalizedNodes);
  const [pager, setPager] = useState(1);
  const [selectedTerm, setSelectedTerm] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (tid) => {
    setSelectedTerm(tid);
    setPager(1);
  };

  const handlePaginationChange = (selected) => {
    setPager(selected);
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

      if (selectedTerm === "all") {
        categoryFilter = {};
      }

      const requestParams = {
        ...postsQueryParams,
        page: { limit: 4, offset: (pager - 1) * 4 },
        ...categoryFilter,
      };

      setIsLoading(true);

      Api.getResponse("node/publication", requestParams, node.langcode)
        .then((res) => {
          const normalizedNodes = normalizeNodes(res.data);
          const total = res.meta.count;
          setPosts(normalizedNodes);
          setCount(total);
          setIsLoading(false);
          console.log("zebi",res)
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }

    fetchData();
  }, [selectedTerm, node.langcode, pager]);

  return (
    <div>
      <Heading level={2}>{t("Publications")}</Heading>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && posts.length <= 0 && <h3>{t("Aucun résultat.")}</h3>}
      <PostsFormFilter
        terms={normalizedCategories}
        value={selectedTerm}
        handleChange={handleChange}
      />
      {posts.length > 0 && (
        <PostsPage
          handlePaginationChange={handlePaginationChange}
          count={count}
          pager={pager}
          posts={posts}
        />
      )}
    </div>
  );
};

export default PostsContainer;
