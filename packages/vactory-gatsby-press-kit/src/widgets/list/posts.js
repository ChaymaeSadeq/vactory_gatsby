import React from 'react'
import {
  CardPressKit,
  imageLayoutStyles,
} from 'vactory-gatsby-press-kit'
import { Col, Container, Row } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} md={4}>
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

export default Posts
