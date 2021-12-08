import { Fragment } from 'react';
import Specials from '../specials/wrapper/Specials';
import ProductsWrapper from '../products/wrapper/ProductsWrapper';

export default function HomeLayout() {
  return (
    <Fragment>
      <Specials />
      <ProductsWrapper />
    </Fragment>
  );
}
