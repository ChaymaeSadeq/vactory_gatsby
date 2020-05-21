import React from 'react';
import get from 'lodash.get';
import {Head} from 'vactory-gatsby-core'
import {DefaultLayout as Layout} from 'vactory-gatsby-ui'
import {theme as vactoryTheme, ColorModeProvider, DirectionManager, GlobalStyle} from 'vactory-ui';
import {ThemeProvider} from 'styled-components';
import deepmerge from 'deepmerge';
import {theme as UiTheme} from './theme'

const theme = deepmerge.all([vactoryTheme, UiTheme]);
theme.breakpoints = vactoryTheme.breakpoints;

export const wrapPageElement = ({element, props}) => {
    const node = get(props, 'pageContext.node');
    // const pageInfo = get(props, 'pageContext.pageInfo');
    // const location = get(props, 'location');

    if (node) {
        return (
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <DirectionManager>
                        <GlobalStyle/>
                        <Head lang={node.langcode} meta={node.field_vactory_meta_tags}/>
                        <Layout {...props}>{element}</Layout>
                    </DirectionManager>
                </ColorModeProvider>
            </ThemeProvider>
        )
    } else {
        return null
    }
};
