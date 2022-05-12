import { Fragment } from 'react';
import { GlobalStyle } from '@assets/styles/GlobalStyle';
import Header from '../header/Header';
import NavBar from './navBar/NavBar';

export default function GlobalLayout() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      {/* <NavBar /> */}
    </Fragment>
  );
}
