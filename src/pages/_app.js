import { GlobalStyle } from '@assets/styles/GlobalStyle';
import storeWrapper from '@store/index';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { StyleSheetManager } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyleSheetManager
        disableVendorPrefixes={process.env.NODE_ENV === 'development'}
      >
        <Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </StyleSheetManager>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default storeWrapper.withRedux(MyApp);
