import React from "react"
import {
    BannersTemplate,
    StatePageSection
} from 'vactory-gatsby-ui'

const HeaderExample = () => {
    return <h1>Header</h1>
};

const FooterExample = () => {
    return <div>Footer</div>
};

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {

    return (
        <>
            <StatePageSection.Provider>

                <HeaderExample/>

                {node.internal_node_banner &&
                <BannersTemplate
                    widget={node.internal_node_banner}
                    node={node}
                    breadcrumbItems={(breadcrumb && breadcrumb.length > 0) ? breadcrumb : []}/>
                }
                <main>
                    {children}
                </main>
            </StatePageSection.Provider>

            <FooterExample/>
        </>
    )
}
