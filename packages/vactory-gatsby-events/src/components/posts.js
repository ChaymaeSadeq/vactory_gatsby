import React from "react";
import {
  CardEvents,
  imageLayoutStyles,
  postsQueryParams,
} from "vactory-gatsby-events";
import { Container, Row, Col, Box } from "vactory-ui";
import { Pagination } from "vactory-gatsby-ui";

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardEvents
                  posts={node}
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
          current={current}
          onChange={onChange}
        />
      </Box>
    </div>
  );
};

export default Posts;
