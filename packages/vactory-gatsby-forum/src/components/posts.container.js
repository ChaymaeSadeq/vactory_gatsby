import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Api from 'vactory-gatsby-api'
import {
  postsQueryParams,
  normalizeNodes,
  normalizeTerms,
  PostsPage,
  PostsFormFilter,
} from 'vatory-gatsby-forum'
import { Heading, Container, Paragraph } from 'vactory-ui'
import { LoadingOverlay, Pagination } from 'vactory-gatsby-ui'

const PostsContainer = ({ pageContext: { pageCount, node, nodes, terms } }) => {
  const { t } = useTranslation()
  const normalizedCategories = normalizeTerms(terms)
  const normalizedNodes = normalizeNodes(nodes)
  const isFirstRun = useRef(true)
  const [posts, setPosts] = useState(normalizedNodes)
  const [selectedTerms, setSelectedTerms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pager, setPager] = useState(1)
  const [count, setCount] = useState(pageCount)

  // const handleChange = (e) => {
  //   let index
  //   if (e.target.checked) {
  //     setSelectedTerms([...selectedTerms, e.target.value])
  //   } else {
  //     index = selectedTerms.indexOf(e.target.value)
  //     setSelectedTerms(item => item.filter((selectedTerms, i) => i !== index));
  //   }
  //   setPager(1)
  // }

  const handlePaginationChange = (selected) => {
    setPager(selected)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    function fetchData() {
      let categoryFilter = {
        "filter[category][condition][path]":
        "field_vactory_taxonomy_1.drupal_internal__tid",
        "filter[category][condition][operator]": "IN",
        "filter[category][condition][value]": selectedTerms,
      }
      if (selectedTerms.length === 0) {
        categoryFilter = {}
      }
      const requestParams = {
        ...postsQueryParams,
        page: {
          limit: postsQueryParams.page.limit,
          offset: (pager - 1) * postsQueryParams.page.limit,
        },
        ...categoryFilter,
      }

      setIsLoading(true)
      Api.getResponse('node/forum', requestParams, node.langcode)
        .then((res) => {
          const normalizedNodes = normalizeNodes(res.data)
          const total = res.meta.count
          setPosts(normalizedNodes)
          setCount(total)
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          console.log(err)
        })
    }
    fetchData()
  }, [selectedTerms, node.langcode, pager])

  return (
    <Container>
      <Heading px="xsmall" level={2}>
        {t('Réalisations')}
      </Heading>
      {/* <PostsFormFilter
        terms={normalizedCategories}
        value={selectedTerms}
        handleChange={handleChange}
      /> */}
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && <PostsPage posts={posts} />}
        {!isLoading && posts.length <= 0 && (
          <Paragraph my="medium" textAlign="center">
            {t('Aucun résultat trouvé')}
          </Paragraph>
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
    </Container>
  )
}

export default PostsContainer
