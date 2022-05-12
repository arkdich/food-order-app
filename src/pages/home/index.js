import { Fragment } from 'react';
import SpecialsWrapper from './specials/wrapper/SpecialsWrapper';
import ProductsWrapper from './products/wrapper/ProductsWrapper';
import Cart from './cart/Cart';
import useIsTablet from '@hooks/useIsTablet';

export default function HomeLayout() {
  const isTablet = useIsTablet();

  return (
    <Fragment>
      {/* <SpecialsWrapper />
      <ProductsWrapper isTablet={isTablet} />
      {isTablet && <Cart />} */}
    </Fragment>
  );
}
