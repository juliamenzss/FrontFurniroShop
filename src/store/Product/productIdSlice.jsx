import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '7524c0c3-0f71-4269-84e6-be8bf7cb1ac1',
    skuId: '7e42bfa7-cb00-4b2c-b3a9-68bfc7e89d84',
};

const productIdSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setProductId: (state, action) => {
            state.id = action.payload.id;
            state.skuId = action.payload.skuId;
            console.log('aqui é reducer')
        }
    }
})

export const { setProductId } = productIdSlice.actions;
export default productIdSlice.reducer;