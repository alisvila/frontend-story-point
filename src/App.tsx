import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AllRoutes from './utils/router';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AllRoutes />
    </ThemeProvider>
  );
}

export default App;
