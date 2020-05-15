import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next"
import * as queryString from "query-string"
import isClient from "is-client"
import Api from "vactory-gatsby-api"
import Posts from "./posts"
import {Paragraph, Container} from "vactory-ui";
import {Pagination, LoadingOverlay} from 'vactory-gatsby-ui'

const SearchContainer = ({pageContext: {node}}) => {
    const {t} = useTranslation();
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [pageItems, setPageItems] = useState([]);
    const [pager, setPager] = useState(1);
    const isFrontClient = isClient();
    const pageSize = 5;
    const queryParams = isFrontClient ? queryString.parse(window.location.search) : {q: ""};
    const {q} = queryParams || "";


    const handlePaginationChange = (selected) => {
        setPager(selected)
    };

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true)
            Api.getRest('_search', {
                params: {
                    q: q,
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
    }, [pager, q, node.langcode]);

    return (
        <Container>
            {(count > 0) &&
            <Paragraph my="medium" textAlign="center">
                {count} {t("résultat(s) pour votre recherche")}
            </Paragraph>
            }

            <LoadingOverlay active={isLoading}>
                {pageItems.length > 0 &&
                <Posts posts={pageItems}/>
                }
            </LoadingOverlay>

            {pageItems.length > 0 &&
            <Pagination
                total={count}
                pageSize={pageSize}
                current={pager}
                onChange={handlePaginationChange}
            />
            }
        </Container>
    )
};

export default SearchContainer
