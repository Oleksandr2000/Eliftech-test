import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slice/CartSlice';
import shopReducer from './slice/ShopSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});

export default store;
