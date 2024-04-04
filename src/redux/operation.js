import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import gerAllSearchParams from "../utils/getAllSearchParams";

axios.defaults.baseURL = "https://65fcfea69fc4425c6530f49e.mockapi.io";

// export const fetchCatalog = createAsyncThunk(
//   "catalog/featchAllAdvert",
//   async (_, thunkApi) => {
//     const searchParams = {
//       query: "example",
//       page: 1,
//       limit: 10,
//     };
//     try {
//       const res = await axios.get(`/adverts`);
//       return res.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const getAllAdverts = createAsyncThunk(
  "adverts/getAll",
  async ({ currentPage }, thunkAPI) => {
    const axiosParams = {
      page: currentPage,
      limit: 4,
    };
    //gerAllSearchParams(searchParams, axiosParams);

    try {
      const { data } = await axios.get(`/adverts`, {
        params: axiosParams,
      });
      //console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTotal = createAsyncThunk(
  "adverts/getTotal",
  async (searchParams, thunkAPI) => {
    gerAllSearchParams(searchParams);

    try {
      const { data } = await axios.get(`/adverts`);
      //console.log(data);
      return data.lenght;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
