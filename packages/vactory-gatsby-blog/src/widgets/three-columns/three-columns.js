import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardBlog } from 'vactory-gatsby-blog'

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={4}>
              <CardBlog posts={node} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
