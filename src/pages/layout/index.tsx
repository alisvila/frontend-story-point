import React, { ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';

import theme from 'src/theme';
import ComponentWithChild from 'types/Component';

import { BoxMain, DashboardLayoutRoot } from './layout.styled';

export default function DashLayout({ children }: ComponentWithChild) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayoutRoot>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <BoxMain
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              {children}
            </BoxMain>
          </Box>
        </DashboardLayoutRoot>
      </ThemeProvider>
    </>
  );
}
