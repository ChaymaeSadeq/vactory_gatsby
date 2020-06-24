import React from 'react'
import { CardPressReleaseOneRow, postsQueryParams } from 'vactory-gatsby-press-release'
import { Col, Container, Row, Pagination, Box } from 'vactory-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container>
        {posts.map((node) => {
          return (
            <Row key={node.id}>
              <Col xs={12}>
                <CardPressReleaseOneRow {...node} />
              </Col>
            </Row>
          )
        })}
      </Container>
      {count > 4 && (
        <Box p="medium">
          <Pagination
            total={count}
            pageSize={postsQueryParams.page.limit}
            current={current}
            onChange={onChange}
          />
        </Box>
      )}
    </div>
  )
}

export default Posts
