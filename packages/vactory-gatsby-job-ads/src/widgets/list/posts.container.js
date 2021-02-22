import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Api from 'vactory-gatsby-api'
import {
  postsQueryParams,
  normalizeNodes,
  normalizeDFNodes,
  PostsPage,
  PostsFormFilter,
  NewsletterSection,
} from 'vactory-gatsby-job-ads'
import { LoadingOverlay, Pagination } from 'vactory-gatsby-ui'

const PostsContainer = ({nodes, cities, contracts, professions, pageCount}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language
  const normalizedNodes = normalizeDFNodes(nodes)

  const isFirstRun = useRef(true)
  const [posts, setPosts] = useState(normalizedNodes)
  const [selectedCity, setSelectedCity] = useState('all')
  const [selectedContract, setSelectedContract] = useState('all')
  const [selectedProfession, setSelectedProfession] = useState('all')
  const [isLoading, setIsLoading] = useState(false)
  const [pager, setPager] = useState(1)
  const [count, setCount] = useState(pageCount)

  const handleChangeCity = (tid) => {
    setSelectedCity(tid)
    setPager(1)
  }

  const handleChangeContract = (tid) => {
    setSelectedContract(tid)
    setPager(1)
  }

  const handleChangeProfession = (tid) => {
    setSelectedProfession(tid)
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
      let cityFilter = {
        'filter[city][condition][path]':
          'field_vactory_taxonomy_1.drupal_internal__tid',
        'filter[city][condition][operator]': '=',
        'filter[city][condition][value]': selectedCity,
      }
      let contractFilter = {
        'filter[contract][condition][path]':
          'field_vactory_taxonomy_2.drupal_internal__tid',
        'filter[contract][condition][operator]': '=',
        'filter[contract][condition][value]': selectedContract,
      }
      let professionFilter = {
        'filter[profession][condition][path]':
          'field_vactory_taxonomy_3.drupal_internal__tid',
        'filter[profession][condition][operator]': '=',
        'filter[profession][condition][value]': selectedProfession,
      }

      if (selectedCity === 'all') cityFilter = {}
      if (selectedContract === 'all') contractFilter = {}
      if (selectedProfession === 'all') professionFilter = {}

      const requestParams = {
        ...postsQueryParams,
        page: {
          limit: postsQueryParams.page.limit,
          offset: (pager - 1) * postsQueryParams.page.limit,
        },
        ...cityFilter,
        ...contractFilter,
        ...professionFilter,
      }

      setIsLoading(true)

      Api.getResponse('node/job_ads', requestParams, currentLanguage)
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
  }, [selectedCity, selectedContract, selectedProfession, currentLanguage, pager])

  return (
		<div className="container">
			<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
				{t("Job Ads")}
			</h2>
			<PostsFormFilter
				cities={cities}
				contracts={contracts}
				professions={professions}
				value={selectedCity}
				handleChangeCity={handleChangeCity}
				handleChangeContract={handleChangeContract}
				handleChangeProfession={handleChangeProfession}
			/>
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<NewsletterSection />
				<LoadingOverlay
					className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12"
					active={isLoading}
				>
					{posts.length > 0 && <PostsPage posts={posts} />}
					{!isLoading && posts.length <= 0 && (
						<p className="text-center my-8">
							{t("Aucun résultat trouvé")}
						</p>
					)}
				</LoadingOverlay>
			</div>
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
