import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardAcademy } from 'vactory-gatsby-academy'

export const TwoColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={6}>
              <CardAcademy {...node} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
