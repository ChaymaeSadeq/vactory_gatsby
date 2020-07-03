import React from "react";
import { useTranslation } from "react-i18next";
import { Select, Box, Label, Flex } from "vactory-ui";

const PostsFormFilter = ({
  terms,
  cities,
  value,
  handleChangeCategory,
  handleChangeCity,
}) => {
  const { t } = useTranslation();
  return (
    <Box pt="10px" pb="30px" px="xsmall">
      <Flex flexDirection="row">
        <Flex flexDirection="column" mx="xsmall">
          <Label htmlFor="events-category" mb="xsmall">
            {t("Thématique")}
          </Label>
          <Select
            id="events-category"
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

        <Flex flexDirection="column" mx="xsmall">
          <Label htmlFor="events-cities" mb="xsmall">
            {t("Ville")}
          </Label>
          <Select
            id="events-cities"
            onBlur={null}
            onChange={(e) => handleChangeCity(e)}
            defaultValue={value}
          >
            <option value="all">{t("Toutes les villes")}</option>
            {cities.map((term) => {
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
