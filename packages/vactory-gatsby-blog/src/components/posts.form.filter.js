import React from "react";
import { useTranslation } from "react-i18next";
import { Select, Box, Label, Flex } from "vactory-ui";

const PostsFormFilter = ({
  terms,
  value,
  handleChangeCategory,
}) => {
  const { t } = useTranslation();
  return (
    <Box pt="10px" pb="30px" px="xsmall">
      <Flex flexDirection="row">
        <Flex flexDirection="column" mx="xsmall">
          <Label htmlFor="blog-category" mb="xsmall">
            {t("Thématique")}
          </Label>
          <Select
            id="blog-category"
            onBlur={null}
            onChange={(e) => handleChangeCategory(e)}
            defaultValue={value}
          >
            <option value="all">{t("Tous les thématiques")}</option>
            {terms.map((term) => {
              return (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              );
            })}
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostsFormFilter;
