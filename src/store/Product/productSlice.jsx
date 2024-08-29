import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productLoading: (state) => {
      state.status = 'loading';
    },
    productReceived: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    productFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
    
  }
});

export const { productLoading, productReceived, productFailed } = productSlice.actions;
export default productSlice.reducer;
