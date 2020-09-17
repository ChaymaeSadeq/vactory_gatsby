import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    Toolbox,
    SocialMediaMenu,
    Breadcrumb,
    BannersTemplate,
    CookieComplianceLayer,
    OfflineDetector,
    BackToTop,
    StatePageSection
} from 'vactory-gatsby-ui'

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    return (
        <>
            <StatePageSection.Provider>
            <Header pageInfo={pageInfo} currentLanguage={node.langcode} location={location}/>
            {node.internal_node_banner &&
            <BannersTemplate
                widget={node.internal_node_banner}
                node={node}
                breadcrumbItems={(breadcrumb && breadcrumb.length > 0) ? breadcrumb : [] }/>
            }
            {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb}/>}
            <main>
                {children}
            </main>
            <SocialMediaMenu />
            <Toolbox />
            </StatePageSection.Provider>
            <Footer/>
            <CookieComplianceLayer />
            <OfflineDetector />
            <BackToTop />
        </>
    )
}
