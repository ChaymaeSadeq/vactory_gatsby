import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import { useForm } from "react-hook-form";
import {
  Heading,
  Container,
  Paragraph,
  Box,
  Input,
  Button,
  Flex,
} from "vactory-ui";
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
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [internalAlphabet] = useState(
    node.langcode === "ar" ? arabicAlphabet : Alphabet
  );
  const [isLoading, setIsLoading] = useState(false);
  const message =
    node.langcode === "ar" ? "لا يوجد نتائج" : "Aucun résultat trouvé";
  const handleChange = (alphabet) => {
    setSelectedAlphabet(alphabet);
    setSelectedKeyword(null);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSelectedKeyword(data["keyword"]);
  };
  const reset = () => {
    setSelectedKeyword(null);
    setSelectedAlphabet(node.langcode === "ar" ? "أ" : "A");
  };

  useEffect(() => {
    function fetchData() {
      let AlphabetFilter = {
        "filter[label][condition][path]": "title",
        "filter[label][condition][operator]": "STARTS_WITH",
        "filter[label][condition][value]": selectedAlphabet,
      };
      let wordFilter = {
        "filter[label][condition][path]": "title",
        "filter[label][condition][operator]": "CONTAINS",
        "filter[label][condition][value]": selectedKeyword,
      };

      if (node.langcode === "ar" && selectedAlphabet === "أ") {
        AlphabetFilter = AFilter;
      }
      if (node.langcode === "ar" && selectedAlphabet === "ء") {
        AlphabetFilter = BFilter;
      }
      const Filter = selectedKeyword ? wordFilter : AlphabetFilter;
      const requestParams = {
        ...postsQueryParams,
        ...Filter,
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
  }, [selectedAlphabet, node.langcode, selectedKeyword]);

  return (
    <Container>
      <Heading px="xsmall" level={2} textAlign="center">
        {t("Glossary")}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box pt="10px" pb="30px" px="xsmall" m="small">
          <Flex
            flexDirection={["column", "row"]}
            mx="xsmall"
            mb={["10px", "0px"]}
          >
            <Input
              type="text"
              placeholder="keyword"
              m="small"
              name="keyword"
              id="keyword"
              ref={register}
            />
            <Button type={"submit"} m="xsmall">
              Appliquer
            </Button>
            <Button type={"reset"} bg="#868e96" m="xsmall" onClick={reset}>
              Rénitialiser
            </Button>
          </Flex>
        </Box>
      </form>
      <PostsFormFilter
        langue={node.langcode}
        alphabet={internalAlphabet}
        handleChange={handleChange}
      />
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && <PostsPage posts={posts} langue={node.langcode} />}
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
