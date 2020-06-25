import React from 'react'
import {
  CardPressKit,
  imageLayoutStyles,
  postsQueryParams,
} from 'vactory-gatsby-press-kit'
import { Col, Container, Row, Box } from 'vactory-ui'
import { Pagination } from 'vactory-gatsby-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} md={4}>
                <CardPressKit
                  {...node}
                  imageSettings={imageLayoutStyles.threeColumns}
                />
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
