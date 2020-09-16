import React from 'react'
import { CardTender } from 'vactory-gatsby-tender'
import { Container, Row, Col } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12}>
              <CardTender {...node} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Posts
