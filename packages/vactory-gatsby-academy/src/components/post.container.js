import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Api from 'vactory-gatsby-api'
import {
  PostPage,
  postQueryParams,
  normalizeNode,
} from 'vactory-gatsby-academy'
import { LoadingOverlay } from 'vactory-gatsby-ui'

const PostContainer = ({ pageContext: { node } }) => {
  const { t } = useTranslation()
  const normalizedNode = normalizeNode(node)
  const isFirstRun = useRef(true)
  const [post, setPost] = useState(normalizedNode)
  const [isLoading, setIsLoading] = useState(false)
  const [rate, setRate] = useState({
    vote_average: 0,
    vote_count: 0,
    hasVoted: false,
  })

  useEffect(() => {
    fetchRating()
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    function fetchRating() {
      Api.getRest(
        `api/rate/results/node/${node.drupal_internal__nid}`,
        {},
        node.langcode,
      )
        .then((res) => {
          if (res.data.status === true && res.data.hasVoted === true)
            setRate({
              ...res.data.fivestar,
              hasVoted: true,
              vote: res.data.vote,
            })
          else if (res.data.status === true && res.data.hasVoted === false)
            setRate({ ...res.data.fivestar, hasVoted: false })
        })
        .catch((err) => {
          console.log(err)
        })
    }

    function fetchData() {
      const requestParams = {
        ...postQueryParams,
      }
      setIsLoading(true)
      Api.getResponse('node/academy', requestParams, node.langcode)
        .then((res) => {
          const normalizedNode = normalizeNode(res.data)
          setPost(normalizedNode)
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          console.log(err)
        })
    }
    fetchData()
  }, [node.langcode]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleVote = (rating) => {
    Api.getRest(
      `api/rate/node/${node.drupal_internal__nid}/fivestar/${rating}`,
      {},
      node.langcode,
    )
      .then((res) => {
        if (res.data.status)
          setRate({
            ...rate,
            hasVoted: true,
            vote: rating,
            ...res.data.fivestar,
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUnvote = () => {
    Api.getRest(
      `api/rate/undo/node/${node.drupal_internal__nid}`,
      {},
      node.langcode,
    )
      .then((res) => {
        if (res.data.status === true && res.data.fivestar)
          setRate({ hasVoted: false, ...res.data.fivestar })
        else if (res.data.status === true)
          setRate({ vote_average: 0, vote_count: 0, hasVoted: false })
        else if (res.data.status === false)
          setRate({ vote_average: 0, vote_count: 0, hasVoted: false })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
		<>
			<LoadingOverlay active={isLoading}>
				{post && (
					<PostPage
						{...post}
						{...rate}
						handleVote={handleVote}
						handleUnvote={handleUnvote}
					/>
				)}
				{!isLoading && !post && (
					<p className="text-center my-8">
						{t("Aucun résultat trouvé")}
					</p>
				)}
			</LoadingOverlay>
		</>
  );
}

export default PostContainer

/**
 * rate state
 */
