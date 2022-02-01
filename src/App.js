import { Route, Routes } from 'react-router';
import GlobalLayout from 'src/layouts/navigation';
import HomeLayout from '@pages/home';
import ProductPage from '@pages/product';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route path="/" element={<HomeLayout />}>
          <Route path="product" element={<ProductPage />} />
        </Route>
        <Route path="cart" element={<p>Cart Placeholder</p>}></Route>
        <Route path="*" element={<p>Упс! Кажется вы ошиблись ссылкой</p>} />
      </Route>
    </Routes>
  );
}
