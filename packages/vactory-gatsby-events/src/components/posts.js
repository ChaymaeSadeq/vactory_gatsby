import React from "react";
import CardEvents from "./cardEvents";
import { Container, Row, Col, Pagination, Box } from 'vactory-ui'
const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container>
        <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} sm={6} md={4}>
              <CardEvents node={node} />
            </Col>
          );
        })}
        </Row>
      </Container>
      <Box p="medium">
        <Pagination
          total={count}
          pageSize={4}
          current={current}
          onChange={onChange}
        />
      </Box>
    </div>
  );
};

export default Posts;
