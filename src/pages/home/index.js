import { Fragment, useEffect, useState } from 'react';
import SpecialsWrapper from './specials/wrapper/SpecialsWrapper';
import ProductsWrapper from './products/wrapper/ProductsWrapper';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Cart from './cart/Cart';
import useMatchMedia from '@hooks/useMatchMedia';
import breakpoints from '@utils/variables/breakpoints';

export default function HomeLayout() {
  const media = useMatchMedia(
    `only screen and (max-width: ${breakpoints.tablet})`
  );
  const [isTablet, setIsTablet] = useState(media.matches);

  useEffect(() => {
    const callback = () => setIsTablet(media.matches);

    media.addEventListener('change', callback);

    return () => media.removeEventListener('change', callback);
  }, [media]);

  return (
    <Fragment>
      <SpecialsWrapper />
      <ProductsWrapper />
      {createPortal(<Outlet />, document.getElementById('modal'))}
      {isTablet && <Cart />}
    </Fragment>
  );
}
