import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardPressKit, imageLayoutStyles } from 'vactory-gatsby-press-kit'

export const TwoColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.key} xs={12} md={6}>
              <CardPressKit
                {...node}
                imageSettings={imageLayoutStyles.twoColumns}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
