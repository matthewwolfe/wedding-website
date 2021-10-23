import React from 'react';
// eslint-disable-next-line
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhancedApp(props) {
          return sheets.collect(<App {...props} />);
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default CustomDocument;
