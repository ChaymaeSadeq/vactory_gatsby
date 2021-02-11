import React, {useEffect, useState} from 'react'
import Api from "vactory-gatsby-api";
import {useTranslation} from "react-i18next"
import { Transition } from "@headlessui/react";
import {Link, CardContentLoader} from "vactory-gatsby-ui";
import {mapOrder} from '../utils/mapOrder'

export const VCC = ({title, linkLabel, nid, resource, resourceType, queryParams, renderNode, normalizer, limit = 3}) => {
    const {t, i18n} = useTranslation();
    const language = i18n.language;
    const [posts, setPosts] = useState(null);
    const [moreLink, setMoreLink] = useState(null);
    let internalTitle = title ? title : t('Articles similaires');
    let internalLinkLabel = linkLabel ? linkLabel : t('Voir plus');

    useEffect(() => {
        async function loadSimilarIds() {
            const {data} = await Api.getResponse(`node/${resource}`, {
                filter: {
                    "drupal_internal__nid": nid,
                },
                fields: {
                    [resourceType]: 'vcc_normalized'
                }
            }, language);

            return new Promise(function (resolve, reject) {
                if (data[0]['vcc_normalized']) {
                    resolve(data[0]['vcc_normalized'])
                } else {
                    reject(`VCC is used in ${resource} but has not been configured for the content type. Check out /admin/structure/types/manage/events`)
                }
            });
        }

        async function loadNodes() {
            const config = await loadSimilarIds();
            const ids = config.ids;

            let nidsFilter = {
                "filter[ids][condition][path]": "drupal_internal__nid",
                "filter[ids][condition][operator]": "IN",
                "filter[ids][condition][value]": []
            };

            ids.forEach(id => {
                nidsFilter['filter[ids][condition][value]'].push(id);
            });

            const params = {
                ...nidsFilter,
                fields: queryParams.fields,
                include: queryParams.include,
                page: {
                    limit: config.limit
                }
            };

            const {data} = await Api.getResponse(`node/${resource}`, params, language);
            let sortedNodes = mapOrder(data, ids, 'drupal_internal__nid');
            return {
                nodes: sortedNodes,
                config
            };
        }

        loadNodes().then(({nodes, config}) => {
            setPosts(normalizer(nodes));
            if (config.link_more && config.link_more.length > 0) {
                setMoreLink(config.link_more)
            }
        }).catch(error => console.warn(error));
    }, [nid]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
		<div className="py-10 bg-gray-100">
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl mb-14">
						{internalTitle}
					</h2>
					{/* {raw_description.length > 0 && (
						<div className="my-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
							{description}
						</div>
					)} */}
				</div>

				{(posts && (
					<div className="flex flex-wrap">
						{posts.map((node) => (
                            <Transition
                                key={node.id}
                                show={true}
                                enter="transform ease-out duration-300 transition"
                                enterFrom="scale-90 opacity-0"
                                enterTo="scale-100 opacity-100"
                                leave="transform ease-out duration-300 transition"
                                leaveFrom="scale-100 opacity-100"
                                leaveTo="scale-90 opacity-0"
                                className="w-full sm:w-1/2 md:w-1/3 px-1 sm:px-2: md:px-3"
                            >
                                {renderNode(node)}
                            </Transition>
						))}
					</div>
				)) || (
					<div className="flex flex-wrap">
						{Array(limit).fill().map((e, i) => (
                            <div key={i} className="w-full sm:w-1/2 md:w-1/3 px-1 sm:px-2: md:px-3" >
                                <CardContentLoader />
                            </div>
                        ))}
					</div>
				)}

				{moreLink && (
					<div className="flex justify-center mt-12">
						<Link
							href={moreLink}
							className="inline-flex items-center border border-gray-300 shadow-sm px-6 py-3 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							{internalLinkLabel}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
