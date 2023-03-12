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
  extraReducers: builder => {
    builder
      .addCase(waybillInfo.fulfilled, (state, action) => {
        action.payload.data.forEach(item => {
          state.status = item.Status;
          state.sentFrom = item.WarehouseSender;
          state.sentTo = item.WarehouseRecipient;
          if (!state.waybillsList.includes(item.Number)) {
            state.waybillsList.push(item.Number);
          }
        });
        if (action.payload.errors) {
          action.payload.errors.forEach(item => {
            state.error = item;
          });
        }
        state.isLoading = false;
      })
      .addCase(waybillInfo.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      .addCase(waybillInfo.pending, state => {
        state.isLoading = true;
      });
  },
});

export const deliveryReducer = deliverySlice.reducer;
export const { clearWaybills } = deliverySlice.actions;
