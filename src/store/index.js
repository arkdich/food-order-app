import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { specialsReducer } from './specialsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    specials: specialsReducer,
  },
});
