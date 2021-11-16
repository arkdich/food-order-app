import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './store/productsSlice';
import { Route, Routes } from 'react-router';
import GlobalLayout from './components/globalLayout/GlobalLayout';
import ProductsWrapper from './components/products/ProductsWrapper';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<ProductsWrapper />} />
        <Route path="cart" element={<p>Cart Placeholder</p>} />
        <Route path="profile" element={<p>Profile Placeholder</p>} />
      </Route>
    </Routes>
  );
}
