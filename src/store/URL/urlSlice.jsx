import { createSlice } from "@reduxjs/toolkit";

const initialPage = 1;
const initialPageSize = 16;
const initialSortByName = null;
const initialSortByPrice = null;

const initialState = {
  baseURL: `http://localhost:3000/products`,
  page: initialPage,
  pageSize: initialPageSize,
  sortByName: initialSortByName,
  sortByPrice: initialSortByPrice,
};

const URLReducer = createSlice({
  name: "URL",
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseURL = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
      state.baseURL = buildURL(state);
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.baseURL = buildURL(state);
    },
    setSortByName: (state, action) => {
      state.sortByName = action.payload;
      state.baseURL = buildURL(state);
    },
    setSortByPrice: (state, action) => {
      state.sortByPrice = action.payload;
      state.baseURL = buildURL(state);
    },
  },
});

function buildURL(state) {
  let url = `http://localhost:3000/products?page=${state.page}&pageSize=${state.pageSize}`;

  if (state.sortByName) {
    url += `&sortByName=${state.sortByName}`;
  }

  if (state.sortByPrice) {
    url += `&sortByPrice=${state.sortByPrice}`;
  }

  return url;
}



export const { setBaseUrl, setPage, setPageSize, setSortByName, setSortByPrice } = URLReducer.actions;
export default URLReducer.reducer;
