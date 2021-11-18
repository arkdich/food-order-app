import { getDoc } from '@firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specialsRef } from './firestore';

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
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setSpecialsItems(state, action) {
      state.items = action.payload;
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
