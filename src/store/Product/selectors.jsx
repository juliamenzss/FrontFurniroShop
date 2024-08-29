import { createSelector } from '@reduxjs/toolkit';

const selectProductsState = (state) => {
  return state.products;
};

const selectProducts = createSelector(
  [selectProductsState],
  (productsState) => {
    return productsState?.items || [];
  }
);

const selectProductsStatus = createSelector(
  [selectProductsState],
  (productsState) => {
    return productsState?.status || 'idle';
  }
);

export { selectProductsStatus, selectProducts };
