import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cart/cartSlice';
import { productsReducer } from './slices/products/productsSlice';
import { specialsReducer } from './slices/specials/specialsSlice';

export default function createStore(preloadedState) {
  return configureStore({
    preloadedState,
    reducer: {
      products: productsReducer,
      specials: specialsReducer,
      cart: cartReducer,
    },
  });
}
