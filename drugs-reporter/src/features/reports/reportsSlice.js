import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reportsService from './reportsService.js';

// const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  reports: [],
  isLoading: false,
};

export const getAllReports = createAsyncThunk('reports/all', async (user, thunkAPI) => {
  try {
    console.log('Get All Reports Thunk');
    return await reportsService.getAll(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllReports.pending]: (state) => {
      console.log('getAllReports pending');
      state.isLoading = true;
    },
    [getAllReports.fulfilled]: (state, action) => {
      console.log('getAllReports fulfilled');
      state.reports = action.payload;
      state.isLoading = false;
    },
    [getAllReports.rejected]: (state, action) => {
      console.log('getAllReports rejected');
    },
  },
});

export default reportsSlice.reducer;
