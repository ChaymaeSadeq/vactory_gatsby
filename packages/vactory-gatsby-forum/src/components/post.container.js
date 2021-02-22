import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Api from 'vactory-gatsby-api';
import { PostPage, postQueryParams, normalizeNode } from "vactory-gatsby-forum";
// import { Paragraph } from 'vactory-ui';
import { LoadingOverlay } from 'vactory-gatsby-ui';
import qs from "qs"

const PostContainer = ({pageContext: {node}}) => {
    const { t } = useTranslation();
    const normalizedNode = normalizeNode(node)
    const isFirstRun = useRef(true)
    const [post, setPost] = useState(normalizedNode)
    const [isLoading, setIsLoading] = useState(false);

    const sendData = () => {
      const params = {'nid': post.nid}
      Api.postRest('_updateNodeViewsCount', qs.stringify(params), node.langcode)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
    useEffect(() => {
      sendData()
    }, [])

    useEffect(() => {
        if (isFirstRun.current) {
          isFirstRun.current = false
          return
        }
    
        function fetchData() {
          const requestParams = {
            ...postQueryParams,
          }
          setIsLoading(true)
          Api.getResponse('node/vactory_forum', requestParams, node.langcode)
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
    return (
      <LoadingOverlay active={isLoading}>
        {post && <PostPage post={post} />}
        {!isLoading && !post && (
          <p>
            {t("Aucun résultat trouvé")}
          </p>
        )}
      </LoadingOverlay>
    );
};

export default PostContainer
