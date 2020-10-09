import React from "react";
import { CardNews, imageLayoutStyles } from "vactory-gatsby-news";
import { Container, Row, Col } from "vactory-ui";

const Posts = ({ posts }) => {
    // console.log(posts)
  return (
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardNews {...node} imageSettings={imageLayoutStyles.threeColumns} />
              </Col>
            );
          })}
        </Row>
      </Container>
  );
};

export default Posts;
