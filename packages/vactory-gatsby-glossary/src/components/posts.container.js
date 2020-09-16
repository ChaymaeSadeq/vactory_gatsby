import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import { Heading, Container, Paragraph } from "vactory-ui";
import { LoadingOverlay } from "vactory-gatsby-ui";
import {
  postsQueryParams,
  normalizeNodes,
  PostsPage,
  PostsFormFilter,
  Alphabet,
  arabicAlphabet,
  AFilter,
  BFilter,
} from "vactory-gatsby-glossary";

const PostsContainer = ({ pageContext: { node } }) => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [selectedAlphabet, setSelectedAlphabet] = useState(
    node.langcode === "ar" ? "أ" : "A"
  );
  const [internalAlphabet] = useState(
    node.langcode === "ar" ? arabicAlphabet : Alphabet
  );
  const [isLoading, setIsLoading] = useState(false);
  const message = node.langcode === "ar" ? "لا يوجد نتائج" : "Aucun résultat trouvé";
  const handleChange = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  useEffect(() => {
    function fetchData() {
      let AlphabetFilter = {
        "filter[label][condition][path]": "title",
        "filter[label][condition][operator]": "STARTS_WITH",
        "filter[label][condition][value]": selectedAlphabet,
      };

      if (node.langcode === "ar" && selectedAlphabet === "أ") {
        AlphabetFilter = AFilter;
      }
      if (node.langcode === "ar" && selectedAlphabet === "ء") {
        AlphabetFilter = BFilter;
      }

      const requestParams = {
        ...postsQueryParams,
        ...AlphabetFilter,
      };
      setIsLoading(true);
      Api.getResponse("node/glossary", requestParams, node.langcode)
        .then((res) => {
          const normalizedNodes = normalizeNodes(res.data);
          setPosts(normalizedNodes);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error");
          setIsLoading(false);
          console.log(err);
        });
    }

    fetchData();
  }, [selectedAlphabet, node.langcode]);

  return (
    <Container >
      <Heading px="xsmall" level={2} textAlign="center">
        {t("Glossary")}
      </Heading>
      <PostsFormFilter
        langue={node.langcode}
        alphabet={internalAlphabet}
        handleChange={handleChange}
      />
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && <PostsPage posts={posts} langue={node.langcode}/>}
        {!isLoading && posts.length <= 0 && (
          <Paragraph my="medium" textAlign="center">
            {message}
          </Paragraph>
        )}
      </LoadingOverlay>
    </Container>
  );
};

export default PostsContainer;
