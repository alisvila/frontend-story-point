import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { BoxMain, DashboardLayoutRoot } from './layout.styled';
import ComponentWithChild from 'types/Component';

export default function DashLayout({ children }: ComponentWithChild) {
  return (
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
  );
}
