import React from "react";
import { Container, Row, Col } from "vactory-ui";
import { CardBlog, imageLayoutStyles } from "vactory-gatsby-blog";

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.key} xs={12} md={4}>
              <CardBlog
                {...node}
                imageSettings={imageLayoutStyles.threeColumns}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
