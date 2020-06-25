import React from 'react'
import {
  CardPressReleaseOneRow,
  imageLayoutStyles,
  postsQueryParams,
} from 'vactory-gatsby-press-release'
import { Col, Container, Row, Box } from 'vactory-ui'
import { Pagination } from 'vactory-gatsby-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
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
