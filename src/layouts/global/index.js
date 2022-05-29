import { Fragment } from 'react';
import Header from './header/Header';
import NavBar from './navigation/navBar/NavBar';

export default function GlobalLayout() {
  return (
    <Fragment>
      <Header />
      <NavBar />
    </Fragment>
  );
}
