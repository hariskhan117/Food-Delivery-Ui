import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CartReducer from './Slices/CartSlice';
import FavoriteReducer from './Slices/FavoriteSlice';
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
