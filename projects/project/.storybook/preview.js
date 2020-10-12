import React from "react"
import { action } from "@storybook/addon-actions"
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react';
import {
  theme as vactoryTheme,
  GlobalStyle,
  mergeIcons,
  iconSet,
  VactoryIconProvider
} from 'vactory-ui';

import deepmerge from 'deepmerge';
import VactoryGlobaltStyle from '../src/vactory-gatsby-ui/GlobalStyle'
import {theme as UiTheme} from '../src/vactory-gatsby-ui/theme'
import customIconSet from '../src/vactory-gatsby-ui/custom-icons';
const theme = deepmerge.all([vactoryTheme, UiTheme]);
theme.breakpoints = vactoryTheme.breakpoints;
const customIcons = mergeIcons(iconSet, customIconSet);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
};

const pageContext = {
  node: {
    langcode: 'fr',
    metatag_normalized: '',
  }
};

console.log(theme.colors);

addDecorator(storyFn =>  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <VactoryGlobaltStyle />
  <VactoryIconProvider value={customIcons}>
  {storyFn()}
  </VactoryIconProvider>
</ThemeProvider>);
