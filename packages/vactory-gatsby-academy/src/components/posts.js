import React from 'react'
import { CardAcademy, imageLayoutStyles, postsQueryParams } from 'vactory-gatsby-academy'
import { Container, Row, Col, Pagination, Box } from 'vactory-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardAcademy {...node} imageSettings={imageLayoutStyles.threeColumns} />
              </Col>
            )
          })}
        </Row>
      </Container>
      {count > 4 && (
        <Box p="medium">
          <Pagination
            total={count}
            defaultPageSize={postsQueryParams.page.limit}
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
