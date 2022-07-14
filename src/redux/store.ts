import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/CartSlice';
import shopReducer from './slice/ShopSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
