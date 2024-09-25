import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productId, productSkuId, quantity } = action.payload;
      const itemInCart = state.cart.find(
        (item) => item.productId === productId && item.productSkuId === productSkuId
      );
    
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity  });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(item => item.productSkuId !== action.payload);

    },
  },
  clearCart: (state) => {
    state.cart = [];
  },
});

export const { addProduct, incrementQuantity, decrementQuantity,removeProduct, clearCart } = cartReducer.actions;
export default cartReducer.reducer;

