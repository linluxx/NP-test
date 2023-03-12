import { createSlice } from '@reduxjs/toolkit';

import { getCities, getWarehouses } from './operations';

const initialState = {
  cities: [],
  offices: [],
  isWarehousesLoading: false,
  isLoading: false,
  error: '',
  city: '',
};

const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {
    setCityName(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [getCities.fulfilled]: (state, action) => {
      state.cities = action.payload.data;
      if (action.payload.errors) {
        action.payload.errors.map(item => (state.error = item));
      }
      state.isLoading = false;
    },
    [getCities.rejected]: (state, action) => {
      action.payload.errors.map(item => (state.error = item));
      state.isLoading = false;
    },
    [getCities.pending]: state => {
      state.isLoading = true;
    },

    [getWarehouses.fulfilled]: (state, action) => {
      state.offices = action.payload.data;
      if (action.payload.errors) {
        action.payload.errors.map(item => (state.error = item));
      }
      state.isWarehousesLoading = false;
    },
    [getWarehouses.rejected]: (state, action) => {
      action.payload.errors.map(item => (state.error = item));
      state.isWarehousesLoading = false;
    },
    [getWarehouses.pending]: state => {
      state.isWarehousesLoading = true;
    },
  },
});
export const officesReducer = officesSlice.reducer;
export const { setCityName } = officesSlice.actions;
