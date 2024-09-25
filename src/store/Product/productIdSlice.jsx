import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '85c11943-f24b-4abc-856c-84079794bfa4',
    skuId: '2d9b46be-f61e-4ca5-86fb-ca441b92d308',
};

const productIdSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setProductId: (state, action) => {
            state.id = action.payload.id;
            state.skuId = action.payload.skuId;
        }
    }
})

export const { setProductId } = productIdSlice.actions;
export default productIdSlice.reducer;