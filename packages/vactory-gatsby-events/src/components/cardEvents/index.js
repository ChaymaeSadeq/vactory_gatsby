import React from "react";
import { Box, Flex, Button, Text } from "vactory-ui";
import { Link } from "gatsby";
import get from "lodash.get";
import { Picture } from "vactory-gatsby-ui";
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
const Date = ({ sx, children }) => (
  <Box
    sx={sx}
    __css={{
      textAlign: "center",
      float: "left",
      position: "absolute",
      right: "3%",
      top: "3%",
      zIndex: "1000",
      backgroundColor: "danger500",
      color: "white",
      fontWeight: "bold",
      borderRadius: "small",
      // py: "1%",
      px: "5%",
    }}
  >
    {children}
  </Box>
);

const Hoover = ({ sx, children }) => (
  <Box
    sx={sx}
    __css={{
      position: "relative",
    }}
  >
    {children}
  </Box>
);

const Bx = ({ sx, children }) => (
  <Box
    sx={sx}
    __css={{
      p: "xxsmall",
      fontSize: "15px",
    }}
  >
    {children}
  </Box>
);

const dateCalc = (date) => {
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const x = date.split("-");
  const months = parseInt(x[1]);
  x[1] = mS[months - 1];
  return x;
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
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};
export const CardEvents = (props) => {
  const title = props.title;
  const image = get(props, "image");
  const imageSettings = get(props, "imageSettings", null);
  const beginDate = dateCalc(props.dateInterval.value);
  const endDate = dateCalc(props.dateInterval.end_value);
  return (
    <Card>
      <Hoover>
        <Date>
          <Bx>{beginDate[2]}</Bx>
          <Bx sx={{ fontSize: "20px" }}>{beginDate[1]}</Bx>
          <Bx>-</Bx>
          <Bx>{endDate[2]}</Bx>
          <Bx sx={{ fontSize: "20px" }}>{endDate[1]}</Bx>
        </Date>
        <Picture
          file={image}
          sizes={imageSettings.sizes}
          alt={title}
          width={imageSettings.width}
          height={imageSettings.height}
          ratio={imageSettings.ratio}
          className="card-image"
        />
      </Hoover>
      <Box p="medium">
        <CardTitle>{props.title}</CardTitle>
        <Flex mb="16px">
          <CapitalCardTag sx={{ backgroundColor: "info500" }}>
            {props.category}
          </CapitalCardTag>
          <CapitalCardTag sx={{ backgroundColor: "danger500" }}>
            {props.city}
          </CapitalCardTag>
        </Flex>
        <CardExcerpt
          dangerouslySetInnerHTML={{
            __html: props.excerpt,
          }}
        />
      </Box>
      <Box p="medium" mt="auto">
        <Link to={props.url} style={{ textDecoration: "none" }}>
          <Button fill="info">Read more</Button>
        </Link>
      </Box>
    </Card>
  );
};
