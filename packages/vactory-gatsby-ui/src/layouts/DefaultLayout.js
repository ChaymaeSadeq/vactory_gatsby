import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    Breadcrumb
} from 'vactory-gatsby-ui'

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    return (
        <>
            <Header pageInfo={pageInfo} currentLanguage={node.langcode}/>
            {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb}/>}
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
