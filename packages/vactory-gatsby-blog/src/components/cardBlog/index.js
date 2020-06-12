import React from "react";
import { Box, Flex, Image, Button, Text } from "vactory-ui";
import { Link } from "gatsby";
import get from 'lodash.get'
import { ImageDefault } from 'vactory-gatsby-ui'
const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        textTransform: "uppercase",
        color: "info500",
        fontSize: ["16px", null, "18px", null],
        ineHeight: "28px",
        fontWeight: 600,
        letterSpacing: "0",
        marginBottom: "16px",
      }}
    >
      {children}
    </Box>
  );
};

const CapitalCardTag = ({ sx, children }) => (
  <Box
    sx={sx}
    __css={{
      display: "inline-flex",
      fontSize: "9px",
      fontWeight: "600",
      backgroundColor: "primary800",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "none",
      textTransform: "uppercase",
      py: "xxsmall",
      px: "xsmall",
      color: "white",
      mr: "xxxsmall",
    }}
  >
    {children}
  </Box>
);
const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text fontSize="14px" color="black800" {...rest}>
      {children}
    </Text>
  );
};



const Card = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        borderRadius: "small",
        overflow: "hidden",
        fontFamily: "montserrat",
        marginBottom: "16px",
        boxShadow: 2,
        width:'100%',
        height:'100%'
      }}
    >
      {children}
    </Box>
  );
};
export const CardBlog = (props) => {
  
  const { posts } = props;
  const image = get(props, 'posts.image._default', ImageDefault)
  
  return (
    <Card>
        
          <Image src={image} />
       
        <Box p="medium">
          <CardTitle>{posts.title}</CardTitle>
          <Flex mb="16px">
            <CapitalCardTag sx={{ backgroundColor: "info500" }}>
              {posts.category}
            </CapitalCardTag>
          </Flex>
          <CardExcerpt
            dangerouslySetInnerHTML={{
              __html: posts.excerpt,
            }}
          />
        </Box>
        <Box p="medium" mt="auto">
          <Link to={posts.url} style={{ textDecoration: "none" }}>
            <Button fill="info">Read more</Button>
          </Link>
        </Box>
    </Card>
  );
};
