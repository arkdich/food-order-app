import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count: 0,
    cost: 0,
  },
  reducers: {
    addItem(state, { payload: { id, size, type, price } }) {
      const entry = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (entry) entry.count += 1;
      else state.items.push({ id, type, size, count: 1 });

      state.count += 1;
      state.cost += price;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
