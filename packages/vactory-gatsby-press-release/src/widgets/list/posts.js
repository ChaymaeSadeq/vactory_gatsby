import React from 'react'
import {
  CardPressReleaseOneRow,
  imageLayoutStyles,
} from 'vactory-gatsby-press-release'
import { Col, Container, Row } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
      <Container>
        {posts.map((node) => {
          return (
            <Row key={node.id}>
              <Col xs={12}>
                <CardPressReleaseOneRow
                  {...node}
                  imageSettings={imageLayoutStyles.threeColumns}
                />
              </Col>
            </Row>
          )
        })}
      </Container>
  )
}

export default Posts
