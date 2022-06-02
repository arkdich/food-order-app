import { createSlice } from '@reduxjs/toolkit';

const specialsSlice = createSlice({
  name: 'specials',
  initialState: {
    info: {},
    items: {},
    error: null,
  },
  reducers: {
    setItems(state, { payload: { specials, products } }) {
      const globalDiscounts = specials.discounts;

      const items = {};

      Object.values(products).forEach((product) => {
        const discount = product.categories
          .map((c) => [c, globalDiscounts[c]])
          .filter((a) => a[1]);

        const maxDiscount = discount.sort((a, b) => b[1] - a[1])[0];

        if (maxDiscount) items[product.id] = maxDiscount[1];
      });

      state.items = items;
      state.info = specials;
    },
    setError(state, action) {
      state.error = { message: action.payload };
    },
  },
});

export const specialsActions = specialsSlice.actions;
export const specialsReducer = specialsSlice.reducer;
