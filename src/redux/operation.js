import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "/api";

export const fetchCatalog = createAsyncThunk(
  "catalog/featchAllAdvert",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/adverts`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
