import React from "react";
import { CardNews, imagesStyles } from "vactory-gatsby-news";
import { Container, Row, Col, Box } from "vactory-ui";
import {Pagination} from 'vactory-gatsby-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardNews {...node} imageSettings={imagesStyles.threeColumns} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Box p="medium">
        <Pagination
          total={count}
          defaultPageSize={9}
          pageSize={9}
          current={current}
          onChange={onChange}
        />
      </Box>
    </div>
  );
};

export default Posts;
