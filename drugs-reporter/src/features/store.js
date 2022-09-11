import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice.js';
import reportsReducer from './reports/reportsSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    reports: reportsReducer,
  },
});
