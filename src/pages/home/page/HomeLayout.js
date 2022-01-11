import { Fragment } from 'react';
import Specials from '../specials/wrapper/Specials';
import ProductsWrapper from '../products/wrapper/ProductsWrapper';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';

export default function HomeLayout() {
  return (
    <Fragment>
      <Specials />
      <ProductsWrapper />
      {createPortal(<Outlet />, document.getElementById('modal'))}
    </Fragment>
  );
}
