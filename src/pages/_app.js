import createStore from '@store/index';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { StyleSheetManager } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={createStore()}>
        <StyleSheetManager
          disableVendorPrefixes={process.env.NODE_ENV === 'development'}
        >
          <Component {...pageProps} />
        </StyleSheetManager>
      </Provider>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
