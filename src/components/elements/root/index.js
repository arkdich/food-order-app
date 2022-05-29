import { Fragment, useContext } from 'react';
import SpecialsWrapper from './specials/wrapper/SpecialsWrapper';
import ProductsWrapper from './products/wrapper/ProductsWrapper';
import Cart from './cart/Cart';
import { IndexCtx } from '@pages/index';

export default function RootPage() {
  const context = useContext(IndexCtx);

  return (
    <Fragment>
      <SpecialsWrapper />
      <ProductsWrapper isTablet={context.isTablet} />
      {context.isTablet && <Cart />}
    </Fragment>
  );
}
