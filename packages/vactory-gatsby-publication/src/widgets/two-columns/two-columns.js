import React from 'react'
import { Container, Row, Col } from 'vactory-ui'
import { Publication, imageLayoutStyles } from 'vactory-gatsby-publication'

export const TwoColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.key} xs={12} md={6}>
              <Publication {...node} imageSettings={imageLayoutStyles.twoColumns}/>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}