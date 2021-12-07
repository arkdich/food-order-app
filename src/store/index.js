import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice';
import { specialsReducer } from './slices/specialsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    specials: specialsReducer,
  },
});
