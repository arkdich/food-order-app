import { Fragment } from 'react';
import Specials from '../specials/Specials';
import ProductsWrapper from './../products/ProductsWrapper';

export default function HomeLayout() {
  return (
    <Fragment>
      <Specials />
      <ProductsWrapper />
    </Fragment>
  );
}
