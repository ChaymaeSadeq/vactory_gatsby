import React from "react";
import { Container, Row, Col } from "vactory-ui";
import { CardTender } from "vactory-gatsby-tender";

export const ThreeColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={4}>
              <CardTender
                {...node}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};