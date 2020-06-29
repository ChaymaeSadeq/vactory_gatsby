import React from "react";
import { Container, Row, Col } from "vactory-ui";
import { CardBlog, imageLayoutStyles } from "vactory-gatsby-blog";

export const TwoColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={6}>
              <CardBlog
                {...node}
                imageSettings={imageLayoutStyles.twoColumns}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
