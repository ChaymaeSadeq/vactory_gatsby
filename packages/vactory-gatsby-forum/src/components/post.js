import React from "react"
import {Comments} from 'vactory-gatsby-comments'
import { ForumSearchInput } from "vactory-gatsby-forum";
import { imageLayoutStyles } from 'vactory-gatsby-academy'
import { Box, Flex, Col, Text, Container } from "vactory-ui";
import { Picture } from 'vactory-gatsby-ui'

const Title = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        fontSize: ['22px', null, '24px', null],
        ineHeight: '30px',
        fontWeight: 800,
        letterSpacing: '0',
        marginBottom: '16px',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const Paragraph = ({ children, ...rest }) => {
  return (
    <Text mb="medium"  fontSize="18px" {...rest}>
      {children}
    </Text>
  )
}

const Post = ({ post }) => {
  return (
    <Container>
      <Flex py="medium" flexDirection={["column", "column", "row"]}>
        <Col xs={12} md={7}>
          <Title>{post.title}</Title>
          <Paragraph
            lineHeight="1.5"
            fontWeight="300"
            dangerouslySetInnerHTML={{
              __html: post.body,
            }}
          />
        </Col>
        <Col xs={12} md={5}>
          <Flex p="medium" flexDirection={"column"}>
            <Col xs={12}>
              <Flex flexDirection="row">
                <Col xs={6}>
                {post.forum_expert.picture &&
                  <Picture
                    file={post.forum_expert.picture}
                    sizes={imageLayoutStyles.Avatar.sizes}
                    alt={post.forum_expert.name}
                    width={imageLayoutStyles.Avatar.width}
                    height={imageLayoutStyles.Avatar.height}
                    ratio={imageLayoutStyles.Avatar.ratio}
                    style={{
                      mb: "16px",
                      borderRadius: "50%",
                    }}
                  />}
                </Col>
                <Col xs={6}>
                  <Flex m="large" flexDirection="column">
                    <Title mb="large" p="none">
                      {post.forum_expert.first_name}{" "}
                      {post.forum_expert.last_name}
                    </Title>
                    <Text mb="medium" mr="medium" fontSize="16px">
                      {post.forum_expert.profession}
                    </Text>
                  </Flex>
                </Col>
              </Flex>
            </Col>
            <Col xs={12}>
              <Paragraph color="#29303b">{post.forum_expert.about}</Paragraph>
            </Col>
          </Flex>
        </Col>
      </Flex>
      <ForumSearchInput />
      <Comments
        entity_uid={post.id}
        type_content="vactory_forum"
        uid={parseInt(post.forum_expert.id)}
      />
    </Container>
  );
  }
export default Post;
