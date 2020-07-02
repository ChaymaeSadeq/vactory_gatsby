import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Api from 'vactory-gatsby-api'
import {
  postsQueryParams,
  normalizeNodes,
  normalizeTerms,
  PostsPage,
  PostsFormFilter,
} from 'vactory-gatsby-job-ads'
import { Heading, Container, Paragraph } from 'vactory-ui'
import { LoadingOverlay, Pagination } from 'vactory-gatsby-ui'

const PostsContainer = ({
  pageContext: { node, nodes, cities, contracts, professions, pageCount },
}) => {
  const { t } = useTranslation()
  const normalizedCities = normalizeTerms(cities)
  const normalizedContracts = normalizeTerms(contracts)
  const normalizedProfessions = normalizeTerms(professions)
  const normalizedNodes = normalizeNodes(nodes)

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

      Api.getResponse('node/job_ads', requestParams, node.langcode)
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
  }, [selectedCity, selectedContract, selectedProfession, node.langcode, pager])

  return (
    <Container>
      <Heading px="xsmall" level={2}>
        {t('Job Ads')}
      </Heading>
      <PostsFormFilter
        cities={normalizedCities}
        contracts={normalizedContracts}
        professions={normalizedProfessions}
        value={selectedCity}
        handleChangeCity={handleChangeCity}
        handleChangeContract={handleChangeContract}
        handleChangeProfession={handleChangeProfession}
      />
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
