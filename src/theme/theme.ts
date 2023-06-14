import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

const myBreakpoints = {
  values: {
    xs: 0,
    sm: 320,
    md: 768,
    lg: 1024,
    xl: 1920,
  },
};

const theme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: myBreakpoints,
});

export default theme;
