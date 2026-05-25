import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      // state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: newItem.quantity,
          image: newItem.image,
          price: Number(newItem.price.replace('$', '')),
          totalPrice: Number(newItem.price.replace('$', '')) * newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0,
      );
      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
    },
    removeFromCart: (state, action) => {
      const removeItem = action.payload.id ? action.payload.id : action.payload;
      state.items = state.items.filter(item => item.id !== removeItem);
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0,
      );
      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } =
  CartSlice.actions;
export default CartSlice.reducer;
