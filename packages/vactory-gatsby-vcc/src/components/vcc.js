import React, {useEffect, useState} from 'react'
import Api from "vactory-gatsby-api";
import {useTranslation} from "react-i18next"
import {Box, Button, Container, Row, Col, Heading, MotionBox} from "vactory-ui";
import {Link, CardContentLoader} from "vactory-gatsby-ui";

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
            return {
                nodes: data,
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

    let Markup = () => (
        <Row>
            {new Array(limit).fill().map((e, i) => {
                return (
                    <Col key={i} xs={12} sm={6} md={4}><CardContentLoader/></Col>
                );
            })}
        </Row>
    );

    if (posts) {
        Markup = () => (
            <Row>
                {posts.map((node) => {
                    const view = renderNode(node);
                    return (
                        <Col key={node.id} xs={12} sm={6} md={4}>
                            <MotionBox
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: {opacity: 1},
                                    hidden: {opacity: 0},
                                }}>{view}</MotionBox>
                        </Col>
                    );
                })}
            </Row>
        );
    }

    return (<Box bg="#e0e0e0" py="medium">
        <Container>
            <Box sx={{
                'text-align': 'center'
            }}>
                <Heading level={2}>{internalTitle}</Heading>
            </Box>
            <Markup/>

            <Box sx={{
                'text-align': 'center'
            }}>
                {moreLink && <Button as={Link} to={moreLink}>{internalLinkLabel}</Button>}
            </Box>

        </Container>
    </Box>)
};
