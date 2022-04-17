import { Route, Routes } from 'react-router';
import GlobalLayout from '@layouts/navigation';
import HomeLayout from '@pages/home';
import ProductPage from '@pages/product';
import Cart from '@pages/cart';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';

export default function App() {
  const location = useLocation();

  return (
    <Fragment>
      <GlobalLayout />
      <HomeLayout />
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}
