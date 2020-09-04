import React from "react"
import {
    StatePageSection
} from 'vactory-gatsby-ui'
import {CapitalAzurHeader} from './components/Header'
import {CapitalAzurFooter} from './components/Footer'

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    return (
        <>
            <StatePageSection.Provider>
            <CapitalAzurHeader/>
            <main>
                {children}
            </main>
            </StatePageSection.Provider>
            <CapitalAzurFooter/>
        </>
    )
}
