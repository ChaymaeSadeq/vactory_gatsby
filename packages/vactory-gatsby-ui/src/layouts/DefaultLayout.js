import React from "react"
import {HeaderA as Header} from '../components/headers/headerA'
import {FooterA as Footer} from "../components/footers/footerA";

export default ({children, location, pageContext: {node, pageInfo}}) => {
    return (
        <>
            <Header pageInfo={pageInfo} currentLanguage={node.langcode} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
