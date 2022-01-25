import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { theme } from 'theme/theme';

import 'public/css/app.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matt & Laura</title>
        <meta name="description" content="Matt & Laura Wedding Webiste" />

        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
