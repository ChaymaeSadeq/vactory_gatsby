import React from 'react'
import { useTranslation } from 'react-i18next'
import { Select, Box, Label, Flex } from 'vactory-ui'

const PostsFormFilter = ({
  cities,
  contracts,
  professions,
  value,
  handleChangeCity,
  handleChangeContract,
  handleChangeProfession,
}) => {
  const { t } = useTranslation()

  return (
    <Box pt="10px" pb="30px">
      <Flex flexDirection={['column', 'row']}>
        <Flex flexDirection="column" mx="xsmall" mb={['10px', '0px']}>
          <Label htmlFor="job-ads-professions" mb="xsmall">
            {t('Profession')}
          </Label>
          <Select
            id="job-ads-professions"
            onBlur={null}
            onChange={(e) => {
              handleChangeProfession(e)
            }}
            defaultValue={value}
          >
            <option value="all">{t('Toutes les professions')}</option>
            {professions.map((term) => {
              return (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              )
            })}
          </Select>
        </Flex>
        <Flex flexDirection="column" mx="xsmall" mb={['10px', '0px']}>
          <Label htmlFor="job-ads-contracts" mb="xsmall">
            {t('Type de contrat')}
          </Label>
          <Select
            id="job-ads-contracts"
            onBlur={null}
            onChange={(e) => {
              handleChangeContract(e)
            }}
            defaultValue={value}
          >
            <option value="all">{t('Tous les types')}</option>
            {contracts.map((term) => {
              return (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              )
            })}
          </Select>
        </Flex>
        <Flex flexDirection="column" mx="xsmall">
          <Label htmlFor="job-ads-cities" mb="xsmall">
            {t('Ville')}
          </Label>
          <Select
            id="job-ads-cities"
            onBlur={null}
            onChange={(e) => {
              handleChangeCity(e)
            }}
            defaultValue={value}
          >
            <option value="all">{t('Toutes les villes')}</option>
            {cities.map((term) => {
              return (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              )
            })}
          </Select>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PostsFormFilter
