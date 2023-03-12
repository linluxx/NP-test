import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { KEY } from '../../api/getInformation';

export const getCities = createAsyncThunk(
  'offices/getCities',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post('/', {
        apiKey: `${KEY}`,
        modelName: 'Address',
        calledMethod: 'getCities',
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getWarehouses = createAsyncThunk(
  'offices/getWarehouses',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/', {
        apiKey: `${KEY}`,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: `${credentials}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
