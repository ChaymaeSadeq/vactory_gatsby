import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardJobAds } from 'vactory-gatsby-job-ads'

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.key} xs={12} md={4}>
              <CardJobAds {...node} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
