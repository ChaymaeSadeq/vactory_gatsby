import React from "react";
import { Box, Flex, Text } from "vactory-ui";
import { Link } from "vactory-gatsby-ui";
import get from "lodash.get";
import { Picture } from "vactory-gatsby-ui";

const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
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

const CardExcerpt = ({ children, ...rest }) => {
    return <Text fontSize="14px" color="black800" {...rest}>
            {children}
    </Text>
};

const CardBody = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};


const InternalCard = ({sx, children, ...rest}) => {
    return (<Box sx={sx} __css={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        marginBottom: '16px',
        width: '100%'
    }} {...rest}>
        {children}
    </Box>)
};

const CardTag = ({ children }) => (
  <Box
    __css={{
      display: "inline-flex",
      fontSize: "9px",
      fontWeight: "600",
      backgroundColor: "primary800",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "rounded",
      textTransform: "uppercase",
      py: "xsmall",
      px: "medium",
      color: "white",
    }}
  >
    {children}
  </Box>
);

const CardDate = ({ children }) => (
  <Box
    __css={{
      display: "inline-flex",
      fontSize: "15px",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "500",
      color: "#9B9B9B",
      ml: "10px",
    }}
  >
    {children}
  </Box>
);

const CardButton = ({ children, ...rest }) => (
  <Box
    as={Link}
    {...rest}
    __css={{
      display: "inline-flex",
      fontSize: "14px",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      color: "#2178FF",
      textTransform: "uppercase",
      textDecoration: "none",
      border: 0,
      p: 0,
      m: 0,
      pb: "8px",
      background: "transparent",
      borderBottom: "2px solid",
      "&:hover": {
        cursor: "pointer",
      },
    }}
  >
    {children}
  </Box>
);

export const CardNews = (props) => {
  const title = props.title;
  const date = props.date;
  const category = props.category;
  const excerpt = props.excerpt;
  const url = props.url;
  const image = get(props, "image", null);
  const imageSettings = get(props, "imageSettings", null);

  return (
    <InternalCard className="card">
      <CardBody className="card-body">
          <Box className="card-image">
              <Picture
                  file={image}
                  sizes={imageSettings.sizes}
                  alt={title}
                  width={imageSettings.width}
                  height={imageSettings.height}
                  ratio={imageSettings.ratio}
                  className="card-image"
              />
          </Box>
        <Box p="medium" className="box">
          <Flex mb="16px" className="flex">
            <CardTag>{category}</CardTag>
            <CardDate>{date}</CardDate>
          </Flex>
          <CardTitle className="card-title">{title}</CardTitle>
            <CardExcerpt className="card-excerpt">{excerpt}</CardExcerpt>
        </Box>
          <Box p="medium" className="box">
          <CardButton className="card-button" to={url}>Read more</CardButton>
          </Box>
      </CardBody>
    </InternalCard>
  );
};
