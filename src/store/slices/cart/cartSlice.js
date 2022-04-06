import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count: 0,
    cost: 0,
  },
  reducers: {
    addItem(state, { payload: { id, size, type, price, img, title } }) {
      const entry = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (entry) entry.count += 1;
      else state.items.push({ id, type, size, count: 1, img, title, price });

      state.count += 1;
      state.cost += price;
    },
    removeItem(state, { payload: { id, size, type } }) {
      const entry = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (!entry) return;

      entry.count -= 1;
      state.count -= 1;
      state.cost -= entry.price;

      if (entry.count === 0)
        state.items = state.items.filter((item) => item !== entry);
    },
    emptyCart(state, payload) {
      state.items = [];
      state.count = 0;
      state.cost = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
