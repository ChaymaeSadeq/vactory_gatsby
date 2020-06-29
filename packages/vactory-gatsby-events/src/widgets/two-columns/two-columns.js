import React from "react";
import { Container, Row, Col } from "vactory-ui";
import { CardEvents, imageLayoutStyles } from "vactory-gatsby-events";

export const TwoColumns = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map((node) => {
          return (
            <Col key={node.id} xs={12} md={6}>
              <CardEvents
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
