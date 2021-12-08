import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '@store/slices/productsSlice';
import { Route, Routes } from 'react-router';
import GlobalLayout from '@pages/navigation/page/GlobalLayout';
import HomeLayout from '@pages/home/page/HomeLayout';
import { fetchSpecials } from '@store/slices/specialsSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSpecials());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="cart" element={<p>Cart Placeholder</p>} />
        <Route path="profile" element={<p>Profile Placeholder</p>} />
      </Route>
    </Routes>
  );
}
