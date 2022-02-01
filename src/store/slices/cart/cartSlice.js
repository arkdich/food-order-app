import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, { payload: { id, size, type } }) {
      const entry = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (entry) entry.count += 1;
      else state.items.push({ id, type, size, count: 1 });
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
