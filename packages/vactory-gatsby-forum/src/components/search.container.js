import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next"
import * as queryString from "query-string"
import isClient from "is-client"
import Api from "vactory-gatsby-api"
import {searchPageSize, SearchPosts} from 'vactory-gatsby-search'
import { useForm } from "react-hook-form";
import {Pagination, LoadingOverlay} from 'vactory-gatsby-ui'
import {useViewsAlias} from "vactory-gatsby-nodes";

const ForumSearchContainer = ({pageContext: {node}, location}) => {
    const {t} = useTranslation();
    const { register, handleSubmit } = useForm();
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [pageItems, setPageItems] = useState([]);
    const [pager, setPager] = useState(1);
    const isFrontClient = isClient();
    const pageSize = searchPageSize;
    const queryParams = isFrontClient ? queryString.parse(window.location.search) : {q: ""};
    const {q} = queryParams || "";
    const searchUrl = useViewsAlias("forum_search");
    const [input, setInput] = useState(q);

    const handlePaginationChange = (selected) => {
        setPager(selected)
    };

    const onSubmit = ({ keyword }) => {
      window.location.href = `${searchUrl}?q=${keyword}`
    };

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true)
            Api.getRest('_search/forum', {
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
    }, [pager, q, node.langcode, pageSize]);

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                type="text"
                placeholder={t("Que recherchez-vous ?")}
                m="small"
                name="keyword"
                id="keyword"
                width="100%"
                ref={register}
              />
              <button type={"submit"} m="xsmall">
                {t("Appliquer")}
              </button>
            </div>
          </div>
        </form>
        {count > 0 && (
          <p>
            {count} {t("résultat(s) pour votre recherche")}
          </p>
        )}

        <LoadingOverlay active={isLoading}>
          {pageItems.length > 0 && <SearchPosts posts={pageItems} />}
          {!isLoading && pageItems.length <= 0 && (
            <p>
              {t("Aucun résultat trouvé pour votre recherche.")}
            </p>
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
      </div>
    );
};

export default ForumSearchContainer
