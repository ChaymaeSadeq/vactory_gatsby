import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    Breadcrumb,
    BannersTemplate
} from 'vactory-gatsby-ui'

// import {GmapA as Map} from 'vactory-gatsby-map'

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    return (
        <>
            {/*<Map mapKey={null} />*/}
            <Header pageInfo={pageInfo} currentLanguage={node.langcode}/>
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
            <Footer/>
        </>
    )
}
