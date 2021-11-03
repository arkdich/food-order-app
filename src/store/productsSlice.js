import { getDocs } from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pizzasRef } from './firestore';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (payload, { rejectWithValue }) => {
    try {
      const pizzasDocs = await getDocs(pizzasRef);

      return pizzasDocs.docs.map((doc) => doc.data());
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const producsReducer = productsSlice.reducer;
export const producsActions = productsSlice.actions;
