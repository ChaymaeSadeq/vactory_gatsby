import React from "react";
// import { Box, Flex, Input, Button } from "vactory-ui";
import { useForm } from "react-hook-form";
import {useViewsAlias} from "vactory-gatsby-nodes";
import {navigate} from "gatsby"
import { useTranslation } from 'react-i18next'

const ForumSearchInput = () => {
  const { t } = useTranslation();
    const { register, handleSubmit } = useForm();
    const searchUrl = useViewsAlias("forum_search");
    const onSubmit = ({keyword}) => {
        navigate(`${searchUrl}?q=${keyword}`);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <input
              type="text"
              placeholder={t("Que recherchez-vous ?")}
              name="keyword"
              id="keyword"
              width="100%"
              ref={register}
            />
            <button type={"submit"} m="xsmall">
              {t("Appliquer")}
            </button>
          </div>
        </div>
      </form>
    );
}
export default ForumSearchInput;
