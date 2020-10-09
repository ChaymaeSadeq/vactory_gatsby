import React from "react";
import { Box, Text } from "vactory-ui";
import { Picture } from "vactory-gatsby-ui";
import get from "lodash.get";

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

const CardBody = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      {children}
    </Box>
  );
};

const CardRoleTitle = ({ children, ...rest }) => {
  return (
    <Text fontSize="14px" color="black800" {...rest}>
      {children}
    </Text>
  );
};

const InternalCard = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "montserrat",
        marginBottom: "16px",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export const CardGouvernance = (props) => {
    const title = props.title;
    const role_title = props.role.label;
  const image = get(props, "image", null);
  const imageSettings = get(props, "imagesettings", null);

  return (
    <InternalCard>
      <CardBody>
        <Picture
          file={image}
          sizes={imageSettings.sizes}
          alt={title}
          width={imageSettings.width}
          height={imageSettings.height}
          ratio={imageSettings.ratio}
          className="card-image"
        />
        <Box p="medium">
          <CardTitle>{title}</CardTitle>
          <CardRoleTitle>{role_title}</CardRoleTitle>
        </Box>
      </CardBody>
    </InternalCard>
  );
};
