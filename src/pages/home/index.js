import { Fragment } from 'react';
import SpecialsWrapper from './specials/wrapper/SpecialsWrapper';
import ProductsWrapper from './products/wrapper/ProductsWrapper';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';

export default function HomeLayout() {
  return (
    <Fragment>
      <SpecialsWrapper />
      <ProductsWrapper />
      {createPortal(<Outlet />, document.getElementById('modal'))}
    </Fragment>
  );
}
