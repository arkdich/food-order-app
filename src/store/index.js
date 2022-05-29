import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { cartReducer } from './slices/cart/cartSlice';
import { productsReducer } from './slices/products/productsSlice';
import { specialsReducer } from './slices/specials/specialsSlice';

const combined = combineReducers({
  products: productsReducer,
  specials: specialsReducer,
  cart: cartReducer,
});

function reducer(state, action) {
  if (action.type === HYDRATE) {
  } else return combined(state, action);
}

function createStore(preloadedState) {
  return configureStore({
    preloadedState,
    reducer,
  });
}
const storeWrapper = createWrapper(createStore);

export default storeWrapper;
