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
} from "vactory-gatsby-news";

const PostsContainer = ({ pageContext: { node, nodes, terms, pageCount } }) => {
  const { t } = useTranslation();
  const normalizedCategories = normalizeTerms(terms);
  const normalizedNodes = normalizeNodes(nodes);
  const isFirstRun = useRef(true);
  const [posts, setPosts] = useState(normalizedNodes);
  const [selectedTerm, setSelectedTerm] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [pager, setPager] = useState(1);
  const [count, setCount] = useState(pageCount);
  const handleChange = (tid) => {
    setSelectedTerm(tid);
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

      Api.getResponse("node/vactory_news", requestParams, node.langcode)
        .then((res) => {
          const normalizedNodes = normalizeNodes(res.data);
          setPosts(normalizedNodes);
          setIsLoading(false);
          const total = res.meta.count;
          setCount(total);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }

    fetchData();
  }, [selectedTerm, node.langcode, pager]);

  return (
    <Container>
      <Heading px="xsmall" level={2}>
        {t("News")}
      </Heading>
      <PostsFormFilter
        terms={normalizedCategories}
        value={selectedTerm}
        handleChange={handleChange}
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
