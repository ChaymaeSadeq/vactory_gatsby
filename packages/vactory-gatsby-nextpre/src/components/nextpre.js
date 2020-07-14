import React, {useEffect, useState} from 'react'
import {Portal} from 'react-portal';
import Api from "vactory-gatsby-api";
import {useTranslation} from "react-i18next"
import {useMedia} from "vactory-ui"
import {PrevNode} from './prev'
import {NextNode} from './next'

export const NextPre = ({nid, resource, queryParams, normalizer}) => {
    const {i18n} = useTranslation();
    const language = i18n.language;
    const [prevPost, setPrevPost] = useState(null);
    const [nextPost, setNextPost] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const isSmallScreen = useMedia('(max-width: 720px)');

    useEffect(() => {
        async function load(filter) {
            const params = {
                ...filter,
                fields: queryParams.fields,
                include: queryParams.include,
                page: {
                    limit: 1
                }
            };

            const {data} = await Api.getResponse(`node/${resource}`, params, language);
            const nodes = normalizer(data);
            if (nodes[0]) {
                return nodes[0]
            }
            return null
        }

        async function loadPrev() {
            return load({
                "filter[prev][condition][path]": "drupal_internal__nid",
                "filter[prev][condition][operator]": "<",
                "filter[prev][condition][value]": nid,
                "sort": '-created'
            });
        }

        async function loadNext() {
            return load({
                "filter[prev][condition][path]": "drupal_internal__nid",
                "filter[prev][condition][operator]": ">",
                "filter[prev][condition][value]": nid,
                "sort": 'created'
            });
        }

        Promise.all([loadPrev(), loadNext()]).then((res) => {
            if (res[0]) {
                setPrevPost(res[0])
            }

            if (res[1]) {
                setNextPost(res[1])
            }

            setLoaded(true)
        })
    }, [nid]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!loaded || isSmallScreen || (!prevPost && !nextPost)) {
        return null;
    }

    return <Portal>
        {prevPost && <PrevNode
            url={prevPost.url}
            title={prevPost.title}
            image={prevPost.image}
            body={prevPost.category}
        />
        }
        {nextPost && <NextNode
            url={nextPost.url}
            title={nextPost.title}
            image={nextPost.image}
            body={nextPost.category}
        />
        }
    </Portal>
};
