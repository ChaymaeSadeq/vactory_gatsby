import React from "react";
import { Box } from "vactory-ui";
import { Link } from "gatsby";
//import get from 'lodash.get'
//import { Picture } from 'vactory-gatsby-ui'

export const CardForum = (props) => {
  const title = props.title;
  const url = props.url;
  // const image = get(props, 'image')
  //const imageSettings = get(props, 'imageSettings', null)

  return (
    <Box height="100%" pb="16px">
      <Link to={url} style={{ textDecoration: "none" }}>
        <h1>{title}</h1>
      </Link>
    </Box>
  );
};
