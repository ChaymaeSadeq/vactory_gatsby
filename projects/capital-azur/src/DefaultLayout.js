import React from "react"
import {
    StatePageSection
} from 'vactory-gatsby-ui'
import { ThemeContext } from 'styled-components';
import {CapitalAzurHeader} from './components/Header'
import {CapitalAzurFooter} from './components/Footer'
import {SocialMediaToolbox} from './components/SocialMediaToolbox'
import {FloatingToolbox} from './components/FloatingToolbox'
import {BackToTopButton} from './components/BackToTop'
import { useMedia } from 'vactory-ui';

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    const theme = React.useContext(ThemeContext);
    const upLg = useMedia(`(min-width: ${theme.breakpoints.lg})`)

    return (
        <>
            <StatePageSection.Provider>
            <CapitalAzurHeader/>
            <main>
                {children}
            </main>
            </StatePageSection.Provider>
            <CapitalAzurFooter/>
            {upLg && <SocialMediaToolbox />}
            {upLg && <FloatingToolbox />}
            <BackToTopButton />
        </>
    )
}
