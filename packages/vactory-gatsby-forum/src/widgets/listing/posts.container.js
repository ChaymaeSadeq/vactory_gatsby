import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Api from 'vactory-gatsby-api'
import {
  postsQueryParams,
  normalizeNodes,
  normalizeDFNodes,
  PostsPage,
} from 'vactory-gatsby-forum'
import { Heading, Container, Paragraph } from 'vactory-ui'
import {LoadingOverlay, Pagination} from 'vactory-gatsby-ui'

const PostsContainer = ({ pageCount, nodes }) => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const normalizedNodes = normalizeDFNodes(nodes)
  console.log(normalizedNodes)
  const isFirstRun = useRef(true)
  const [posts, setPosts] = useState(normalizedNodes)
  const [isLoading, setIsLoading] = useState(false)
  const [pager, setPager] = useState(1)
  const [count, setCount] = useState(pageCount)

  const handlePaginationChange = (selected) => {
    setPager(selected)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    function fetchData() {

      const requestParams = {
        ...postsQueryParams,
        page: { limit: postsQueryParams.page.limit, offset: (pager - 1) * postsQueryParams.page.limit },
      }

      setIsLoading(true)
      Api.getResponse('node/forum', requestParams, currentLanguage)
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
  }, [currentLanguage, pager])

  return (
    <Container>
      <Heading px="xsmall" level={2}>
        {t('Forum')}
      </Heading>
      <LoadingOverlay active={isLoading}>
        {posts.length > 0 && (
          <PostsPage posts={posts} />
        )}
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
