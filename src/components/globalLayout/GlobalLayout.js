import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { GlobalStyle } from '../globalStyle/GlobalStyle';
import Header from '../header/Header';
import NavBar from '../navigation/NavBar';

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
