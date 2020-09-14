import React from 'react';
import get from 'lodash.get';
import {Head} from 'vactory-gatsby-core'
import {DefaultLayout as Layout} from '../DefaultLayout'
import {
    theme as vactoryTheme,
    ColorModeProvider,
    DirectionManager,
    GlobalStyle,
    //mergeIcons,
    //iconSet,
    VactoryIconProvider
} from 'vactory-ui';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import deepmerge from 'deepmerge';
import {theme as UiTheme} from '../theme'
import customIconSet from '../icons/custom-icons.json';

const theme = deepmerge.all([vactoryTheme, UiTheme]);
theme.breakpoints = vactoryTheme.breakpoints;
// const customIcons = mergeIcons(iconSet, customIconSet);
const customIcons = customIconSet;


const VactoryGlobaltStyle = createGlobalStyle`
    a {
    text-decoration: none;
    }
`;
export const wrapPageElement = ({element, props}) => {
    const node = get(props, 'pageContext.node');
    let dir = 'ltr'
    if (node) {
        dir = node.langcode === 'ar' ? 'rtl' : 'ltr';
    }

    if (node) {
        return (
            <ThemeProvider theme={theme}>
                <VactoryIconProvider value={customIcons}>
                    <ColorModeProvider>
                        <DirectionManager dir={dir}>
                            <GlobalStyle/>
                            <VactoryGlobaltStyle/>
                            <Head 
                                title={props.pageContext.title}
                                lang={node.langcode}
                                meta={node.metatag_normalized}/>
                            <Layout {...props}>{element}</Layout>
                        </DirectionManager>
                    </ColorModeProvider>
                </VactoryIconProvider>
            </ThemeProvider>
        )
    } else {
        return null
    }
};
