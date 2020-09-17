import React from "react";
import { Box, Button } from "vactory-ui";
const CardAlphabet = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        borderRadius: "small",
        boxShadow: "2",
        background: "white",
        display: "inline-block",
        align: "center",
        overflow: "hidden",
        fontFamily: "montserrat",
        m: "9px",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

const PostsFormFilter = ({ alphabet, handleChange,langue }) => {
  const ButtonAlphabet = ({ children }) => (
    <Button
      onClick={() => handleChange(children)}
      sx={{
        width: langue === "ar" ? "37px" : "42px",
        height: "42px",
        padding: " 5px 10px",
        backgroundColor: " white",
        color: " black",
        border: "1px solid",
        textAlign: " center",
        display: " inline-block",
        fontSize: " 18px",
        cursor: " pointer",
        "&:hover": {
          backgroundColor: "#F5ED06",
          color: "black",
          border: "0px",
          borderRadius: "0px",
        },
      }}
    >
      {children}
    </Button>
  );
  return (
      <CardAlphabet>
        {alphabet.map((node) => {
          return <ButtonAlphabet key={node}>{node}</ButtonAlphabet>;
        })}
      </CardAlphabet>
    
  );
};

export default PostsFormFilter;
