import { getDocs } from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pizzasRef } from '../../firestore';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_payload, { rejectWithValue }) => {
    try {
      const pizzasDocs = await getDocs(pizzasRef);

      return pizzasDocs.docs.reduce((acc, curr) => {
        const data = curr.data();
        data.id = curr.id;

        const firstIng = data.ingredients[0];
        data.ingredients[0] = firstIng[0].toUpperCase() + firstIng.slice(1);

        acc[curr.id] = data;

        return acc;
      }, {});
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: {},
    status: 'idle',
    error: null,
    filter: 'all',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
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

      console.log(action.payload);
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
