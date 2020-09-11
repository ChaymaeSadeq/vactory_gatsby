import React from "react"
import {
    StatePageSection
} from 'vactory-gatsby-ui'
import { ThemeContext } from 'styled-components';
import {CapitalAzurHeader} from './components/Header'
import {CapitalAzurFooter} from './components/Footer'
import {FloatingBox} from './components/FloatingBox'
import {BackToTopButton} from './components/BackToTop'
import { useMedia } from 'vactory-ui';

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    const theme = React.useContext(ThemeContext);
    const upMd = useMedia(`(min-width: ${theme.breakpoints.md})`)

    return (
        <>
            <StatePageSection.Provider>
            <CapitalAzurHeader/>
            <main>
                {children}
            </main>
            </StatePageSection.Provider>
            <CapitalAzurFooter/>
            {upMd && <FloatingBox />}
            <BackToTopButton />
        </>
    )
}
