import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../services/calcTotalPrice';

const initialState = {
  totalPrice: calcTotalPrice(
    !localStorage.getItem('cart') ? [] : JSON.parse(localStorage.getItem('cart')),
  ),
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  orderSucces: false,
  orderError: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    minusItem(state, action) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);

      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice = calcTotalPrice(state.cartItems);
      } else {
        state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload);
        state.totalPrice = calcTotalPrice(state.cartItems);
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    orderStatusSucces(state) {
      state.orderSucces = true;
    },
    orderStatusError(state) {
      state.orderError = true;
    },
    removeOrderStatus(state) {
      state.orderSucces = false;
      state.orderError = false;
    },
  },
});

export const {
  addToCart,
  minusItem,
  removeItem,
  clearCart,
  orderStatusSucces,
  orderStatusError,
  removeOrderStatus,
} = cartSlice.actions;

export default cartSlice.reducer;
