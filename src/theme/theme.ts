import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  typography: typography,
  palette: palette,
});

export default theme;
