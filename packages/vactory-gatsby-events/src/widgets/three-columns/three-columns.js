import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardEvents } from 'vactory-gatsby-events'

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={4}>
              <CardEvents posts={node} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
