import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CartReducer from './Slices/CartSlice';
import FavoriteReducer from './Slices/FavoriteSlice';
import AuthReducer from './Slices/AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { createAsyncStorage } from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('appDB');
const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  cart: CartReducer,
  favorite: FavoriteReducer,
  auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
