import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    Breadcrumb,
    BannersTemplate,
    CookieComplianceLayer,
    OfflineDetector,
    BackToTop,
    StatePageSection
} from 'vactory-gatsby-ui'
// import {TestComponents} from '../../stories/test/Test'
import "../../../styles.css"

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}, nodeSettings}) => {
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
            {breadcrumb && breadcrumb.length > 0 && (
                <div className="mt-5 mb-3">
                    <Breadcrumb items={breadcrumb} />
                </div>
            )}
            <main>
            {/* <TestComponents /> */}
                {children}
            </main>
            </StatePageSection.Provider>
            <Footer/>
            <CookieComplianceLayer />
            <OfflineDetector />
            <BackToTop />
        </>
    )
}
