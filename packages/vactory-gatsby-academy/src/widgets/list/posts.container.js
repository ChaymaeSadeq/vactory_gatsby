import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Api from 'vactory-gatsby-api'
import {
  postsQueryParams,
  normalizeNodes,
  normalizeDFNodes,
  PostsPage,
  PostsFormFilter,
} from 'vactory-gatsby-academy'
import {LoadingOverlay, Pagination} from 'vactory-gatsby-ui'

const PostsContainer = ({ pageCount, nodes, terms }) => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  // const normalizedCategories = normalizeTerms(terms)
  const normalizedNodes = normalizeDFNodes(nodes)
  const isFirstRun = useRef(true)
  const [posts, setPosts] = useState(normalizedNodes)
  const [selectedTerm, setSelectedTerm] = useState('all')
  const [isLoading, setIsLoading] = useState(false)
  const [pager, setPager] = useState(1)
  const [count, setCount] = useState(pageCount)

  const handleChange = (tid) => {
    setSelectedTerm(tid)
    setPager(1)
  }

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
        'filter[category][condition][path]':
          'field_vactory_taxonomy_1.drupal_internal__tid',
        'filter[category][condition][operator]': '=',
        'filter[category][condition][value]': selectedTerm,
      }

      if (selectedTerm === 'all') {
        categoryFilter = {}
      }

      const requestParams = {
        ...postsQueryParams,
        page: { limit: postsQueryParams.page.limit, offset: (pager - 1) * postsQueryParams.page.limit },
        ...categoryFilter,
      }

      setIsLoading(true)
      Api.getResponse('node/academy', requestParams, currentLanguage)
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
  }, [selectedTerm, currentLanguage, pager])

  return (
		<div className="container">
			<h2 className="text-3xl font-bold">{t("Academy")}</h2>
			<PostsFormFilter
				terms={terms}
				value={selectedTerm}
				handleChange={handleChange}
			/>
			<LoadingOverlay active={isLoading}>
				{posts.length > 0 && <PostsPage posts={posts} />}
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
}

export default PostsContainer
