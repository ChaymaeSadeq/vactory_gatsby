import React from "react"
import {DefaultLanguageDropdown} from '../components/language-dropdown'

export default ({children, location, pageContext: {node, pageInfo}}) => {
    return (
        <>
            <DefaultLanguageDropdown pageInfo={pageInfo} currentLanguage={node.langcode}/>
            {children}
        </>
    )
}
