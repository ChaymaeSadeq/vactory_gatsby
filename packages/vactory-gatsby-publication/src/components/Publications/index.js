import React from "react";
import { Box, Image, Text, Button } from "vactory-ui";
import get from "lodash.get";
import { ImageDefault } from "vactory-gatsby-ui";
import {useTranslation} from "react-i18next"

const CapitalCardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        fontSize: ["16px", null, "18px", null],
        ineHeight: "28px",
        fontWeight: 600,
        letterSpacing: "0",
        marginBottom: "6px",
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

const CapitalCardTag = ({ children }) => (
  <Box
    __css={{
      display: "inline-flex",
      fontSize: "10px",
      fontWeight: "600",
      //textcolor: "primary800",
      backgroundColor: "info500",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "xsmall",
      //textTransform: "uppercase",
      p: "2.8px 7px",
      color: "white",
      marginBottom: "16px",
    }}
  >
    {children}
  </Box>
);

const CapitalCardDate = ({ children }) => (
  <Box
    __css={{
      display: "inline-flex",
      fontSize: "15px",
      fontWeight: "300",
      fontFamily: "sans",
      color: "gray700",
      padding: "medium",
    }}
  >
    {children}
  </Box>
);

const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text fontSize="14px" mb="10px" color="black800" {...rest}>
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
        borderRadius: "8px",
        overflow: "hidden",
        fontFamily: "montserrat",
        marginBottom: "16px",
        width: "100%",
        boxShadow: "2",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const Publication = (props) => {
  const title = props.title;
  const excerpt = props.excerpt;
  const image = get(props, "image._default", ImageDefault);
  const file = props.file;
  const date = props.date;
  const {t} = useTranslation()
  console.log("hahoma", props)

  return (
  <Box height="100%" pb="16px">
      <Card height="100%">
        <CardBody>
          <Image src={image} />
          <Box padding="medium">
            <CapitalCardTitle>{title}</CapitalCardTitle>
            <CapitalCardTag>Publication</CapitalCardTag>
            <CardExcerpt
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />
          </Box>
          {file &&
                <Box p="medium" mt="auto">
                    <Button outline="info" as={'a'} href={file} target={'_blank'} download>{t('Download')}</Button>
                </Box>
               }
          <CapitalCardDate>{date}</CapitalCardDate>
        </CardBody>
      </Card>
    </Box>
  );
};
