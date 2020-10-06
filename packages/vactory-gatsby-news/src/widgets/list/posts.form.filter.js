import React from "react";
import { useTranslation } from "react-i18next";
import { Select, Box, Label } from "vactory-ui";

const PostsFormFilter = ({ terms, value, handleChange }) => {
  const { t } = useTranslation();

  return (
    <Box py="8px">
      <Label htmlFor="news-category" mb="xsmall">
        {t("Thématique")}
      </Label>
      <Select
        id="news-category"
        onBlur={null}
        onChange={(e) => handleChange(e)}
        defaultValue={value}
      >
        <option value="all">{t("Tous les thématiques")}</option>
        {terms.map((term) => {
          return (
            <option key={term.id} value={term.id}>
              {term.label}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};

export default PostsFormFilter;
