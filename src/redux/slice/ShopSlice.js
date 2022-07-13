import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enabledShopsById: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setEnabledShop(state, action) {
      const newShopsById = {};
      action.payload.forEach((item) => {
        newShopsById[item.id] = false;
      });
      state.enabledShopsById = newShopsById;
    },
    disabledShops(state, action) {
      const enabledShopsKeys = Object.keys(state.enabledShopsById);
      enabledShopsKeys.forEach((item) => {
        if (item === action.payload) {
          state.enabledShopsById[item] = false;
        } else state.enabledShopsById[item] = true;
      });
    },
  },
});

export const { setEnabledShop, disabledShops } = shopSlice.actions;

export default shopSlice.reducer;
