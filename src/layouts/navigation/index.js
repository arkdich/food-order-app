import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { GlobalStyle } from '@assets/styles/GlobalStyle';
import Header from './header/Header';
import NavBar from './navbar/wrapper/NavBar';

export default function GlobalLayout() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <NavBar />
      <Outlet />
    </Fragment>
  );
}
