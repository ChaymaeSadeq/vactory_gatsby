import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import {
  CardPressRelease,
  imageLayoutStyles,
} from 'vactory-gatsby-press-release'

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.key} xs={12} md={4}>
              <CardPressRelease
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
