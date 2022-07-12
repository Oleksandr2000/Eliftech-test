import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slice/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
