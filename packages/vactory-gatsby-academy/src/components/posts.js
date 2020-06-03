import React from 'react'
import { CardAcademy } from 'vactory-gatsby-academy'
import { Container, Row, Col, Pagination, Box } from 'vactory-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardAcademy {...node} />
              </Col>
            )
          })}
        </Row>
      </Container>
      {count > 4 && (
        <Box p="medium">
          <Pagination
            total={count}
            pageSize={4}
            current={current}
            onChange={onChange}
          />
        </Box>
      )}
    </div>
  )
}

export default Posts
