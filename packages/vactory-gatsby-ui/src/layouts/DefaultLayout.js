import React from "react"
import {DefaultLanguageDropdown} from '../components/language-dropdown'
import {DefaultMenu} from '../components/menus/DefaultMenu'

export default ({children, location, pageContext: {node, pageInfo}}) => {
    return (
        <>
            <DefaultLanguageDropdown pageInfo={pageInfo} currentLanguage={node.langcode}/>
            <DefaultMenu/>
            {children}
        </>
    )
}
