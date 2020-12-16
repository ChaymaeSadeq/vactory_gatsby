import React from "react";
import { Box, Flex, Input, Button } from "vactory-ui";
import { useForm } from "react-hook-form";
import {useViewsAlias} from "vactory-gatsby-nodes";
import {navigate} from "gatsby"
import { useTranslation } from 'react-i18next'

const ForumSearchInput = () => {
  const { t } = useTranslation();
    const { register, handleSubmit } = useForm();
    const searchUrl = useViewsAlias("forum_search");
    const onSubmit = ({keyword}) => {
        navigate(searchUrl, {state: {keyword:keyword}});
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box py="medium">
          <Flex flexDirection={["column", "row"]} mb={["10px", "0px"]}>
            <Input
              type="text"
              placeholder={t("Que recherchez-vous ?")}
              m="small"
              name="keyword"
              id="keyword"
              width="100%"
              ref={register}
            />
            <Button type={"submit"} m="xsmall">
              {t("Appliquer")}
            </Button>
          </Flex>
        </Box>
      </form>
    );
}
export default ForumSearchInput;
