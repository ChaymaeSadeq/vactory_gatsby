import React from "react";
import { Publication } from "vactory-gatsby-publication";
import { Col, Pagination, Box, Container, Row } from "vactory-ui";

const Posts = ({ posts, handlePaginationChange, pager, count }) => {
  return (
    <div>
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <Publication {...node} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {count > 4 && (
        <Box p="medium">
          <Pagination
            total={count}
            pageSize={4}
            current={pager}
            onChange={handlePaginationChange}
          />
        </Box>
      )}
    </div>
  );
};

export default Posts;
