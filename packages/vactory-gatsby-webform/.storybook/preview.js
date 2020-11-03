import React from 'react';
import {ThemeProvider} from 'styled-components'
import {addDecorator} from '@storybook/react';
import {
    theme,
    GlobalStyle,
    iconSet,
    VactoryIconProvider,
} from 'vactory-ui';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
};

addDecorator((storyFn, context) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <VactoryIconProvider value={iconSet}>
                {storyFn()}
            </VactoryIconProvider>
        </ThemeProvider>)
});
