import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardPressRelease } from 'vactory-gatsby-press-release'

export const TwoColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={6}>
              <CardPressRelease {...node} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
