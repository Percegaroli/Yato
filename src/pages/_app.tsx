import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import store from '../redux/index';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

    <GlobalStyle />
  </>
);

export default MyApp;
