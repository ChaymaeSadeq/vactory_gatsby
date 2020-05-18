import React from "react"
import {useTranslation} from "react-i18next";
import {Select, Box, Label} from 'vactory-ui'
// import {Select, Box} from 'vactory-ui'

const PostsFormFilter = ({terms, value, handleChange}) => {
    const { t } = useTranslation();

    return (
        <Box py="8px">
            <Label htmlFor="news-category" mb="xsmall">{t('Thématique')}</Label>
            {/*<label htmlFor="news-category">{t('Thématique')}</label>*/}
            <Select
                id="news-category"
                onBlur={null}
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={value}
                // pr="25px"
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
