import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productSlice from "./Product/productSlice";
import productIdSlice from "./Product/productIdSlice";
import URLReducer from "./URL/urlSlice";
import authReducer from "./URL/urlSlice";
import billingSlice from "./billing/billingSlice";



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productSlice,
    URL: URLReducer,
    id: productIdSlice,
    auth: authReducer,
    billing: billingSlice
  },
});

