import React from 'react'
import { CardPressRelease } from 'vactory-gatsby-press-release'
import { Container, Row, Pagination, Box } from 'vactory-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <Container fluid={true}>
      {posts.map((node) => {
        return (
          <Row key={node.id}>
            <CardPressRelease {...node} />
          </Row>
        )
      })}
      {count > 4 && <Box p="medium">
        <Pagination
          total={count}
          pageSize={4}
          current={current}
          onChange={onChange}
        />
      </Box>}
    </Container>
  )
}

export default Posts
