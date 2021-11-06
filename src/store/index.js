import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
