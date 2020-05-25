import React from "react"
import { useTranslation } from "react-i18next";
import { Select, Box, Label } from 'vactory-ui'

const PostsFormFilter = ({terms, value, handleChange}) => {
    const { t } = useTranslation();

    return (
        <Box py="10px">
            <Label htmlFor="press-release-theme" mb="xsmall">{t('Thématique')}</Label>
            <Select
                id="press-release-theme"
                onBlur={null}
                onChange={(e) => {handleChange(e)}}
                defaultValue={value}
            >
                <option value="all">{t('Tous les thématiques')}</option>
                {terms.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </Select>
        </Box>
    )
};

export default PostsFormFilter
