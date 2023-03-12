import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { deliveryReducer } from './delivery/slice';
import { officesReducer } from './offices/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const deliveryPersistConfig = {
  key: 'delivery',
  storage,
  whitelist: ['waybillsList'],
};

export const store = configureStore({
  reducer: {
    delivery: persistReducer(deliveryPersistConfig, deliveryReducer),
    offices: officesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
