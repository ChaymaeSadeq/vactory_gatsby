import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next"
import Api from "vactory-gatsby-api"
import {searchPageSize, SearchPosts} from 'vactory-gatsby-search'
import { useForm } from "react-hook-form";
import { Paragraph, Container, Box, Flex, Input, Button } from "vactory-ui";
import {Pagination, LoadingOverlay} from 'vactory-gatsby-ui'

const ForumSearchContainer = ({pageContext: {node}, location}) => {
    const {t} = useTranslation();
    const { register, handleSubmit } = useForm();
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [pageItems, setPageItems] = useState([]);
    const [pager, setPager] = useState(1);
    const pageSize = searchPageSize;
    const queryParam = location.state.keyword ? location.state.keyword : ""
    const [query, setQuery] = useState(queryParam);

    const handlePaginationChange = (selected) => {
        setPager(selected)
    };

    const onSubmit = ({ keyword }) => {
      setQuery(keyword)
    };

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true)
            Api.getRest('_search/forum', {
                params: {
                    q: query,
                    limit: pageSize,
                    pager: pager,
                },
            }, node.langcode)
                .then(res => {
                    const resources = res.data.resources;
                    const total = res.data.count;
                    // setPageItems(pageItems => [...pageItems, ...resources]);
                    setPageItems(resources);
                    setCount(total);
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        };
        fetchData()
    }, [pager, query, node.langcode, pageSize]);

    return (
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box py="medium">
            <Flex flexDirection={["column", "row"]} mb={["10px", "0px"]}>
              <Input
                type="text"
                placeholder={t("Que recherchez-vous ?")}
                m="small"
                name="keyword"
                id="keyword"
                width="100%"
                ref={register}
              />
              <Button type={"submit"} m="xsmall">
                {t("Appliquer")}
              </Button>
            </Flex>
          </Box>
        </form>
        {count > 0 && (
          <Paragraph my="medium" textAlign="center">
            {count} {t("résultat(s) pour votre recherche")}
          </Paragraph>
        )}

        <LoadingOverlay active={isLoading}>
          {pageItems.length > 0 && <SearchPosts posts={pageItems} />}
          {!isLoading && pageItems.length <= 0 && (
            <Paragraph my="medium" textAlign="center">
              {t("Aucun résultat trouvé pour votre recherche.")}
            </Paragraph>
          )}
        </LoadingOverlay>

        {pageItems.length > 0 && (
          <Pagination
            total={count}
            pageSize={pageSize}
            current={pager}
            onChange={handlePaginationChange}
          />
        )}
      </Container>
    );
};

export default ForumSearchContainer
