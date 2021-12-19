import { getDoc } from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specialsRef } from '../../firestore';

export const fetchSpecials = createAsyncThunk(
  'products/fetchSpecials',
  async (_payload, { rejectWithValue }) => {
    try {
      const specialsDoc = await getDoc(specialsRef);

      return specialsDoc.data();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const specialsSlice = createSlice({
  name: 'specials',
  initialState: {
    info: {},
    items: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    setSpecialsItems(state, action) {
      const globalDiscounts = state.info.discounts;
      const products = action.payload;

      const items = {};

      products.forEach((product) => {
        const discount = product.categories
          .map((c) => [c, globalDiscounts[c]])
          .filter((a) => a[1]);

        const maxDiscount = discount.sort((a, b) => b[1] - a[1])[0];

        if (maxDiscount) items[product.id] = maxDiscount[1];
      });

      state.items = items;
    },
  },
  extraReducers: {
    [fetchSpecials.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSpecials.fulfilled]: (state, action) => {
      state.status = 'success';
      state.info = action.payload;
    },
    [fetchSpecials.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;

      console.log(action.payload);
    },
  },
});

export const specialsActions = specialsSlice.actions;
export const specialsReducer = specialsSlice.reducer;
