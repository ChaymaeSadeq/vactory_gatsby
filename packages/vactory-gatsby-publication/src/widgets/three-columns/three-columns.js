import React from "react";
import { Container, Row, Col } from "vactory-ui";
import { Publication } from "vactory-gatsby-publication";

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={4}>
              <Publication {...node} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
