// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D8C6E', 
    },
    secondary: {
      main: '#9333EA', 
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
