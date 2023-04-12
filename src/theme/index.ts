import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#7700bc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
