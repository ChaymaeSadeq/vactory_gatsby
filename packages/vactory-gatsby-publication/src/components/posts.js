import React from "react";
import { Publication, imageLayoutStyles, postsQueryParams } from "vactory-gatsby-publication";
import { Col, Box, Container, Row } from "vactory-ui";
import {
  Pagination
} from "vactory-gatsby-ui";

const Posts = ({ posts, handlePaginationChange, pager, count }) => {
  return (
    <div>
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <Publication
                  {...node}
                  imageSettings={imageLayoutStyles.threeColumns}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
        <Box p="medium">
          <Pagination
            total={count}
            defaultPageSize={postsQueryParams.page.limit}
            pageSize={postsQueryParams.page.limit}
            current={pager}
            onChange={handlePaginationChange}
          />
        </Box>
    </div>
  );
};

export default Posts;
