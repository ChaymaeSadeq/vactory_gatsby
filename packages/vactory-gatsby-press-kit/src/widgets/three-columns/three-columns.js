import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { CardPressKit, imageLayoutStyles } from 'vactory-gatsby-press-kit'

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.key} xs={12} md={4}>
              <CardPressKit
                {...node}
                imageSettings={imageLayoutStyles.threeColumns}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
