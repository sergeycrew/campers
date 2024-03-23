import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fcfea69fc4425c6530f49e.mockapi.io";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAdvert",
  async (_, thunkApi) => {
    const { catalog } = thunkApi.getState();
    try {
      const params = {
        page: catalog.page,
        limit: 4,
      };
      const res = await axios.get(`/advert`, { params });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchAllAdvert = createAsyncThunk(
  "catalog/fetchAllAdvert",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/advert`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
