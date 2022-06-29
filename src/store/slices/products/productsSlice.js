import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: {},
    error: null,
    filter: 'all',
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setError(state, action) {
      state.error = { message: action.payload };
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
