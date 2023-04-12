import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from 'src/components/menue';
import theme from 'src/theme';
import ComponentWithChild from 'types/Component';

export default function PannelWrapper({ children }: ComponentWithChild) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
