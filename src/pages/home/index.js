import { Fragment } from 'react';
import SpecialsWrapper from './specials/wrapper/SpecialsWrapper';
import ProductsWrapper from './products/wrapper/ProductsWrapper';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Cart from './cart/Cart';
import useIsTablet from '@hooks/useIsTablet';

export default function HomeLayout() {
  const isTablet = useIsTablet();

  return (
    <Fragment>
      <SpecialsWrapper />
      <ProductsWrapper />
      {createPortal(<Outlet />, document.getElementById('modal'))}
      {isTablet && <Cart />}
    </Fragment>
  );
}
