import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import { useForm } from "react-hook-form";
import {
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

export const PostsContainer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = (currentLanguage === "ar");
  const [posts, setPosts] = useState([]);

  const [selectedAlphabet, setSelectedAlphabet] = useState(
      isArabic ? "أ" : "A"
  );
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [internalAlphabet] = useState(
      isArabic ? arabicAlphabet : Alphabet
  );
  const [isLoading, setIsLoading] = useState(false);
  const message = t("Aucun résultat trouvé");
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
    setSelectedAlphabet(isArabic ? "أ" : "A");
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

      if (isArabic && selectedAlphabet === "أ") {
        AlphabetFilter = AFilter;
      }
      if (isArabic && selectedAlphabet === "ء") {
        AlphabetFilter = BFilter;
      }
      const Filter = selectedKeyword ? wordFilter : AlphabetFilter;
      const requestParams = {
        ...postsQueryParams,
        ...Filter,
      };
      setIsLoading(true);
      Api.getResponse("node/glossary", requestParams, currentLanguage)
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
  }, [selectedAlphabet, currentLanguage, selectedKeyword, isArabic]);

  return (
    <div>
      {/*<Heading px="xsmall" level={2} textAlign="center">*/}
      {/*  {t("Glossary")}*/}
      {/*</Heading>*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box py="medium">
          <Flex
            flexDirection={["column", "row"]}
            mb={["10px", "0px"]}
          >
            <Input
              type="text"
              placeholder={t("Keyword")}
              m="small"
              name="keyword"
              id="keyword"
              width="100%"
              ref={register}
            />
            <Button type={"submit"} m="xsmall">
              {t("Appliquer")}
            </Button>
            <Button type={"reset"} bg="#868e96" m="xsmall" onClick={reset}>
              {t("Rénitialiser")}
            </Button>
          </Flex>
        </Box>
      </form>
      <PostsFormFilter
        alphabet={internalAlphabet}
        handleChange={handleChange}
      />
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && <PostsPage posts={posts} />}
        {!isLoading && posts.length <= 0 && (
          <Paragraph my="medium" textAlign="center">
            {message}
          </Paragraph>
        )}
      </LoadingOverlay>
    </div>
  );
};
