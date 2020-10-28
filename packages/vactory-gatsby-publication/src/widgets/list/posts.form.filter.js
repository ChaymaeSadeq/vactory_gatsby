import React from "react"
import {useTranslation} from "react-i18next";
import { Select, Box, Label } from 'vactory-ui'


const PostsFormFilter = ({terms, value, handleChange}) => {
    const { t } = useTranslation();

    return (
        <Box pt="10px" pb='30px' px='xsmall'>
            <Label htmlFor="publication_theme">{t('Thématique')}</Label>
            <Select
                id="publication_theme"
                onBlur={null}
                onChange={(e) => {handleChange(e.currentTarget.value)}}
                defaultValue={value}
            >
                <option value="all">{t('Tous les thématiques')}</option>
                {terms.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.label}</option>
                    )
                })}
            </Select>
        </Box>
    )
};

export default PostsFormFilter
