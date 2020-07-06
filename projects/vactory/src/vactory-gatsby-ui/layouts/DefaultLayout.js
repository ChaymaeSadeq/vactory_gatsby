import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    BannersTemplate,
    CookieComplianceLayer,
    OfflineDetector
} from 'vactory-gatsby-ui'

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    return (
        <>
            <Header pageInfo={pageInfo} currentLanguage={node.langcode}/>
            {node.internal_node_banner &&
            <BannersTemplate
                widget={node.internal_node_banner}
                node={node}
                breadcrumbItems={(breadcrumb && breadcrumb.length > 0) ? breadcrumb : [] }/>
            }
            <main>
                {children}
            </main>
            <Footer/>
            <CookieComplianceLayer />
            <OfflineDetector />
        </>
    )
}
