import React from "react"
import {SocialShare, WebShare, Wysiwyg} from "vactory-gatsby-ui"
import {VCC} from "vactory-gatsby-vcc"
import {NextPre} from "vactory-gatsby-nextpre"
import {CardNews, imageLayoutStyles, normalizeNodes, postsQueryParams} from "vactory-gatsby-news"
import {Box, Container, Row, Col, Heading, Text} from "vactory-ui";

const Post = ({post}) => {
    const bodyMarkup = <Wysiwyg html={post.body.processed}/>;

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Heading level={1}>{post.title}</Heading>
                        <Text>{post.field_vactory_date}</Text>
                        <hr />
                        <Box py={'15px'}>{bodyMarkup}</Box>
                        <hr />
                        <SocialShare/>
                        <WebShare/>
                    </Col>
                </Row>
            </Container>
            <VCC
                nid={post.drupal_internal__nid}
                resource={'vactory_news'}
                resourceType={'node--vactory_news'}
                queryParams={postsQueryParams}
                normalizer={normalizeNodes}
                renderNode={
                    node => <CardNews {...node} imageSettings={imageLayoutStyles.threeColumns}/>
                }
            />
            <NextPre
                nid={post.drupal_internal__nid}
                resource={'vactory_news'}
                queryParams={postsQueryParams}
                normalizer={normalizeNodes}
            />
        </div>
    )
};

export default Post
