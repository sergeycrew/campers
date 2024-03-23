import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchAllAdvert } from "./operation";

const initialState = {
  catalog: [],
  allAdvert: [],
  favorites: [],
  isLoading: false,
  error: null,
  currentPage: 1,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage += action.payload;
    },
    changeFavorite(state, action) {
      const isFavorite = state.favorites.filter(
        (catalog) => catalog._id === action.payload._id
      );
      if (isFavorite.length > 0) {
        state.favorites = state.favorites.filter(
          (catalog) => catalog._id !== action.payload._id
        );

        return;
      }
      state.favorites.push({ ...action.payload, favorite: true });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog.push(...action.payload);
        state.error = null;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllAdvert.fulfilled, (state, action) => {
        state.allAdvert = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;

export const { setPage, changeFavorite } = catalogSlice.actions;
