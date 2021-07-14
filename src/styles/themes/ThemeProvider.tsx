import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeProvider = (props: { children: React.ReactChild }) => {
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};

export default ThemeProvider;
