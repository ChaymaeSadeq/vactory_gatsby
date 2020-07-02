import React from 'react'
import { CardJobAdsOneRow } from 'vactory-gatsby-job-ads'
import { Col, Container, Row } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((node) => {
        return (
          <Row key={node.id}>
            <Col xs={12}>
              <CardJobAdsOneRow {...node} />
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}

export default Posts
