import { Route, Routes } from 'react-router';
import GlobalLayout from '@layouts/navigation';
import HomeLayout from '@pages/home';
import ProductPage from '@pages/product';
import Cart from '@pages/cart/Cart';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';

export default function App() {
  const location = useLocation();

  return (
    <Fragment>
      <GlobalLayout />
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomeLayout />}>
            <Route path="product" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<p>Упс! Кажется вы ошиблись ссылкой</p>} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}
