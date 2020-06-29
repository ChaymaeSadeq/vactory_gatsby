import React from "react";
import { Publication, imageLayoutStyles } from "vactory-gatsby-publication";
import { Col, Container, Row } from "vactory-ui";

const Posts = ({ posts }) => {
  return (
      <Container>
        <Row>
          {posts.map((node) => {
            return (
              <Col key={node.id} xs={12} sm={6} md={4}>
                <Publication
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
