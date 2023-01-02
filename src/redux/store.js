import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { searchReducer } from './searchSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  storage,
  key: 'root',
  blacklist: ['search'],
};

const reducers = combineReducers({
  contacts: contactsReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
