import React from "react";
import { CardGlossary } from "vactory-gatsby-glossary";
import { Container, Row, Col } from "vactory-ui";

const Posts = ({ posts,langue }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <CardGlossary posts={posts} langue={langue}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
