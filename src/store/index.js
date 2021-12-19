import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice/productsSlice';
import { specialsReducer } from './slices/specialsSlice/specialsSlice';

export default function createStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      specials: specialsReducer,
    },
  });
}
