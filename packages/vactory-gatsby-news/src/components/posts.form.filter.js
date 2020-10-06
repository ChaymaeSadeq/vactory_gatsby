import React from 'react'
import { useTranslation } from 'react-i18next'
import { Select, Box, Label, Flex } from 'vactory-ui'

const PostsFormFilter = ({ terms, value, sort, handleChange, handleChangeSort }) => {
  const { t } = useTranslation()

  return (
    <Box pt="10px" pb="30px" px="xsmall">
      <Flex flexDirection={['column', 'row']}>
        <Flex flexDirection="column" mx="xsmall">
          <Label htmlFor="news-category" mb="xsmall">
            {t('Thématique')}
          </Label>
          <Select
            id="news-category"
            onBlur={null}
            onChange={(e) => handleChange(e)}
            defaultValue={value}
          >
            <option value="all">{t('Tous les thématiques')}</option>
            {terms.map((term) => {
              return (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              )
            })}
          </Select>
        </Flex>
        <Flex flexDirection="column" mx="xsmall">
          <Label htmlFor="news-sort" mb="xsmall">
            {t('Tri')}
          </Label>
          <Select
            id="news-sort"
            onBlur={null}
            onChange={(e) => handleChangeSort(e)}
            defaultValue={sort}
          >
            <option value="created">{t('Tri Ascendant')}</option>
            <option value="-created">{t('Tri Descendant')}</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PostsFormFilter
