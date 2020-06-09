import React, {useState, useRef} from "react"
// import {useTranslation} from "react-i18next";
import {AppSettings} from 'vactory-gatsby-core'
import {Icon, Drop, Flex, Box} from 'vactory-ui'

export const LanguageSelectorA = ({pageInfo, currentLanguage}) => {
    const [showDrop, setShowDrop] = useState(false);
    const targetRef = useRef();
    // const {t} = useTranslation();
    const languages = AppSettings.languages.languageLabels;
    const count = languages.length;

    const switchLanguage = (selectedLng) => {
        const {path} = pageInfo.find(route => route.locale === selectedLng);
        window.location = path
    };

    return (
        <div>
            {/*<label htmlFor="language-dropdown">{t('Langue')}</label>*/}
            <Box
                ref={targetRef}
                onClick={() => setShowDrop(!showDrop)}
                sx={{
                    cursor: 'pointer'
                }}>
                <Icon
                    name="langue-globe"
                    color="primary"
                    size="large"
                />
            </Box>
            {showDrop && <Drop sx={{overflow: 'initial'}}
                               align={{top: 'bottom', left: 'left'}} target={targetRef.current} stretch={true}>
                <Flex sx={{
                    border: '1px solid',
                    borderColor: 'gray200',
                    backgroundColor: 'white',
                    boxShadow: 3,
                    flexDirection: 'column'
                }}>
                    {languages.map((lng, i) => {
                        const last = count === i + 1;
                        return (
                            <Box
                                key={lng.code}
                                px="small"
                                py="medium"
                                borderBottom={last ? null : '1px solid'}
                                borderBottomColor={last ? null : 'gray300'}
                                sx={{
                                    cursor: 'pointer',
                                    ':hover': {
                                        backgroundColor: 'primary400',
                                        color: 'white',
                                    }
                                }}
                                onClick={() => switchLanguage(lng.code)}
                            >
                                {lng.label}
                            </Box>
                        )
                    })}
                </Flex>
            </Drop>}
            {/*<select*/}
            {/*    id="language-dropdown"*/}
            {/*    onBlur={null}*/}
            {/*    onChange={(e) => switchLanguage(e.target.value)}*/}
            {/*    defaultValue={currentLanguage}*/}
            {/*>*/}
            {/*    {languages.map(lng => {*/}
            {/*        return (*/}
            {/*            <option key={lng.code} value={lng.code}>{lng.label}</option>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</select>*/}
        </div>
    )
}
