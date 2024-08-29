import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   dataUser: { 
    name: '',
    zipCode: '',
    address: '',
    region: '',
    street: '',
    town: '',
    province: '',
    email: '',
    total: '',
    addOnAddress: '',
    addInformation: '',
    }
};

const billingSlice = createSlice({
    name: 'billing',
    initialState,
    reducers: {
      setBilling(state, action) {
        const { field, value } = action.payload;
        state.dataUser[field] = value;
      },
    },
  });
  
  export const { setBilling } = billingSlice.actions;
  export default billingSlice.reducer;