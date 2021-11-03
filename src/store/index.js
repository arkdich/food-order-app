import { configureStore } from '@reduxjs/toolkit';
import { producsReducer } from './productsSlice';

export default configureStore({
  reducer: {
    products: producsReducer,
  },
});
