import { createSlice } from '@reduxjs/toolkit';

import { waybillInfo } from './operations';

const initialState = {
  status: '',
  sentFrom: '',
  sentTo: '',
  waybillsList: [],
  error: [],
  isLoading: false,
};
const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    clearWaybills(state) {
      state.waybillsList = [];
    },
  },
  extraReducers: {
    [waybillInfo.fulfilled]: (state, action) => {
      action.payload.data.map(item => {
        state.status = item.Status;
        state.sentFrom = item.WarehouseSender;
        state.sentTo = item.WarehouseRecipient;
        if (!state.waybillsList.includes(item.Number)) {
          state.waybillsList.push(item.Number);
        }
        return item;
      });
      if (action.payload.errors) {
        action.payload.errors.map(item => (state.error = item));
      }
      state.isLoading = false;
    },
    [waybillInfo.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [waybillInfo.pending](state) {
      state.isLoading = true;
    },
  },
});

export const deliveryReducer = deliverySlice.reducer;
export const { clearWaybills } = deliverySlice.actions;
