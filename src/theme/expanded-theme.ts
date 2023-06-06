import '@material-ui/core/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    buttonLike?: Palette['primary'];
    buttonWidget?: Palette['primary'];
  }
  interface PaletteOptions {
    buttonLike?: PaletteOptions['primary'];
    buttonWidget?: PaletteOptions['primary'];
  }
}
