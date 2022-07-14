import { createSlice } from '@reduxjs/toolkit';

interface ShopSliceState {
  enabledShopsById: boolean[];
}

const initialState: ShopSliceState = {
  enabledShopsById: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setEnabledShop(state, action) {
      const newShopsById: boolean[] = [];
      action.payload.forEach((item: { id: number }) => {
        newShopsById[item.id] = false;
      });
      state.enabledShopsById = newShopsById;
    },
    disabledShops(state, action) {
      const enabledShopsKeys = Object.keys(state.enabledShopsById);
      enabledShopsKeys.forEach((item: string) => {
        if (item === action.payload) {
          state.enabledShopsById[+item] = false;
        } else state.enabledShopsById[+item] = true;
      });
    },
  },
});

export const { setEnabledShop, disabledShops } = shopSlice.actions;

export default shopSlice.reducer;
