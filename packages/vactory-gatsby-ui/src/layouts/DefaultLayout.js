import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    Breadcrumb,
    BannersTemplate,
    CookieComplianceLayer,
    OfflineDetector,
    BackToTop,
    StatePageSection,
    BlocksController
} from 'vactory-gatsby-ui'

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}, nodeSettings}) => {
    return (
        <>
            <BlocksController blocks={node?.internal_blocks || []} region="top" />
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
                <BlocksController blocks={node?.internal_blocks || []} region="beforeContent" />
                {children}
                <BlocksController blocks={node?.internal_blocks || []} region="afterContent" />
            </main>
            </StatePageSection.Provider>
            <Footer/>
            <CookieComplianceLayer />
            <OfflineDetector />
            <BackToTop />
            <BlocksController blocks={node?.internal_blocks || []} region="bottom" />
        </>
    )
}
