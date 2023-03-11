import { createSlice } from '@reduxjs/toolkit';

import { getCities, getWarehouses } from './operations';

const initialState = {
  cities: [],
  offices: [],
  isWarehousesLoading: false,
  isLoading: false,
  error: '',
};

const officesSlice = createSlice({
  name: 'offices',
  initialState,
  extraReducers: {
    [getCities.fulfilled]: (state, action) => {
      // action.payload.data.map(item => {
      //   // if (!state.cities.includes(item.Description)) {
      //   //   state.cities.push(item.Description);
      //   // }
      //   // return item;
      //   return state.cities.push(item.Description);
      // });
      state.cities = action.payload.data;
      if (action.payload.errors) {
        action.payload.errors.map(item => (state.error = item));
      }
      state.isLoading = false;
    },
    [getCities.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [getCities.pending](state) {
      state.isLoading = true;
    },

    [getWarehouses.fulfilled]: (state, action) => {
      // action.payload.data.map(item => {
      //   if (!state.offices.includes(item.Description)) {
      //     return state.offices.push(item.Description);
      //   }
      //   return item;
      // });
      state.offices = action.payload.data;
      if (action.payload.errors) {
        action.payload.errors.map(item => (state.error = item));
      }
      state.isWarehousesLoading = false;
    },
    [getWarehouses.rejected](state, action) {
      state.error = action.payload.message;
      state.isWarehousesLoading = false;
    },
    [getWarehouses.pending](state) {
      state.isWarehousesLoading = true;
    },
  },
});
export const officesReducer = officesSlice.reducer;
