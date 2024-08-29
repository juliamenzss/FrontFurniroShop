import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: {}, 
  userToken: null, 
  error: null,
  success: false,
};

const authSlice  = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers : {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  }

});

export const { } = authSlice.actions;
export default authSlice.reducer;
