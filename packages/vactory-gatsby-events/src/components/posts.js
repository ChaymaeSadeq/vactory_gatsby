import React from "react";
import {
  CardEvents,
  imageLayoutStyles,
} from "vactory-gatsby-events";
import { Container, Row, Col } from "vactory-ui";

const Posts = ({ posts }) => {
  return (
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <CardEvents
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

export default Posts;
