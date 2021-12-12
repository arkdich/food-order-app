import { Route, Routes } from 'react-router';
import GlobalLayout from '@pages/navigation/page/GlobalLayout';
import HomeLayout from '@pages/home/page/HomeLayout';

export default function App() {
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
