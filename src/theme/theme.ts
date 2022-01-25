import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#a44812',
      },
    },
    spacing: 4,
    typography: {
      button: {
        fontFamily: "'Zen Old Mincho', serif",
        fontSize: '1.4rem',
        textTransform: 'none',
      },
      h1: {
        fontSize: '8.5rem',
        fontFamily: "'Birthstone Bounce', cursive",
      },
      h2: {
        fontFamily: "'Zen Old Mincho', serif",
      },
      h3: {
        fontFamily: "'Zen Old Mincho', serif",
      },
      h4: {
        fontFamily: "'Zen Old Mincho', serif",
      },
      h5: {
        fontFamily: "'Zen Old Mincho', serif",
      },
      h6: {
        fontFamily: "'Zen Old Mincho', serif",
      },
    },
  }),
);
