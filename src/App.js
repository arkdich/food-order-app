import { Route, Routes } from 'react-router';
import GlobalLayout from '@pages/navigation/page/GlobalLayout';
import HomeLayout from '@pages/home/page/HomeLayout';
import ProductPage from '@pages/product/page/ProductPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route path="/" element={<HomeLayout />}>
          <Route path="product" element={<ProductPage />} />
        </Route>
        <Route path="cart" element={<p>Cart Placeholder</p>}></Route>
        <Route path="profile" element={<p>Profile Placeholder</p>} />
        <Route path="*" element={<p>Упс! Кажется вы ошиблись ссылкой</p>} />
      </Route>
    </Routes>
  );
}
