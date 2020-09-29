import React from "react";
import { Box, Text } from "vactory-ui";
const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        color: "#02afbc",
        textTransform: "uppercase",
        fontSize: ["16px", null, "18px", null],
        ineHeight: "28px",
        fontWeight: 600,
        letterSpacing: "0",
      }}
    >
      {children}
    </Box>
  );
};

const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text
      __css={{
        fontSize: "14px",
        color: "black800",
        p: "small",
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const CardGlossary = (props) => {
  const { posts ,langue} = props;
  const Card = ({ sx, children, ...rest }) => {
    return (
      <Box
        sx={sx}
        
        __css={{
          boxShadow: "3",
          background: "white",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "montserrat",
          maxWidth: langue === "ar" ? "1075px" : "1093px",
          p:"xxlarge",
          mb:"medium"
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  };
 
  const length = posts.length;
  return (
 
      <Card>
        {posts &&
          posts.map((node,index) => {
            return (
              <Box p="small" >
                <CardTitle>{node.title}</CardTitle>
                <CardExcerpt
                sx={{borderBottom : index !== length-1 ? "dotted" : "none"}}
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </Box>
            );
          })}
      </Card>

  );
};
