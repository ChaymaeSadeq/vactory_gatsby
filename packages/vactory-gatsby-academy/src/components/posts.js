import React from 'react'
import {
  CardAcademy,
  imageLayoutStyles,
} from 'vactory-gatsby-academy'
import { Container, Row, Col } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardAcademy
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
