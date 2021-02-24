import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import {LoadingOverlay, Pagination} from "vactory-gatsby-ui";
import {
  postsQueryParams,
  normalizeNodes,
  normalizeDFNodes,
  // normalizeTerms,
  PostsPage,
  PostsFormFilter,
} from "vactory-gatsby-blog";

const PostsContainer = ({ node, nodes, terms, pageCount }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const normalizedNodes = normalizeDFNodes(nodes);
  const isFirstRun = useRef(true);
  const [posts, setPosts] = useState(normalizedNodes);
  const [selectedTerm, setSelectedTerm] = useState("all");
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
        page: {
          limit: postsQueryParams.page.limit,
          offset: (pager - 1) * postsQueryParams.page.limit,
        },
        ...categoryFilter,
      };

      setIsLoading(true);

      Api.getResponse("node/blog", requestParams, currentLanguage)
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
  }, [selectedTerm, currentLanguage, pager]);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold">
        {t("Blogs")}
      </h2>
      <PostsFormFilter
        terms={terms}
        value={selectedTerm}
        handleChangeCategory={handleChangeCategory}
      />
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && (
          <PostsPage posts={posts} />
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
          defaultPageSize={postsQueryParams.page.limit}
          pageSize={postsQueryParams.page.limit}
          current={pager}
          onChange={handlePaginationChange}
        />
      )}
    </div>
  );
};

export default PostsContainer;
