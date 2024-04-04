import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operation";
import { getAllAdverts, getTotal } from "./operation";

const initialState = {
  catalog: [],
  total: 13,
  favorites:
    JSON.parse(localStorage.getItem("persist:favorites"))?.favorites ?? [],
  bookings: [],
  isLoading: false,
  itemsPerPage: 4,
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
      state.favorites.push({ ...action.payload });
    },
    bookCamper: (state, { payload }) => {
      state.bookings.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.catalog = [...payload];
        //state.currentPage += 1;
      })
      .addCase(getAllAdverts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTotal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.total = payload;
      })
      .addCase(getTotal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // .addCase(fetchCatalog.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(fetchCatalog.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.catalog = action.payload;
      //   state.error = null;
      // })
      .addCase(getTotal.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    // .addCase(fetchCatalog.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const catalogReducer = catalogSlice.reducer;

export const { setPage, changeFavorite, bookCamper } = catalogSlice.actions;
