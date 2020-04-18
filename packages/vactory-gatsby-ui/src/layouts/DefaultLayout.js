import React from "react"
import {DefaultLanguageDropdown} from '../components/LanguageDropdown'

export default ({children, location, pageContext: {node, pageInfo}}) => {
    return (
        <>
            <DefaultLanguageDropdown pageInfo={pageInfo} currentLanguage={node.langcode} />
            {children}
        </>
    )
}
