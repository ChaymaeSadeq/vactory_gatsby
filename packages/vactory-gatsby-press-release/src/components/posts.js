import React from 'react'
import { CardPressRelease } from 'vactory-gatsby-press-release'
import { Container, Row } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
    <Container fluid={true}>
      {posts.map((node) => {
        return (
          <Row key={node.id}>
            <CardPressRelease {...node} />
          </Row>
        )
      })}
    </Container>
  )
}

export default Posts