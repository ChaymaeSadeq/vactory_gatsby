import React from 'react'
import { CardPressRelease } from 'vactory-gatsby-press-release'
import { Container, Row, Pagination, Box } from 'vactory-ui'

const Posts = ({ posts, current, onChange }) => {
  return (
    <Container fluid={true}>
      {posts.map((node) => {
        return (
          <Row key={node.id}>
            <CardPressRelease {...node} />
          </Row>
        )
      })}
      <Box p="medium">
        <Pagination
          total={6}
          pageSize={4}
          current={current}
          onChange={onChange}
        />
      </Box>
    </Container>
  )
}

export default Posts
