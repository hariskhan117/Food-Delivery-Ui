import { createSlice } from '@reduxjs/toolkit';

const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const newItem = action.payload;
      if (!state.favoriteItems) {
        state.favoriteItems = [];
      }
      const existingItem = state.favoriteItems.find(
        item => item.id === newItem.id,
      );
      if (existingItem) {
        state.favoriteItems = state.favoriteItems.filter(
          favItem => favItem.id !== newItem.id,
        );
      } else {
        state.favoriteItems.push(newItem);
      }
    },
  },
});

export const { toggleFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
