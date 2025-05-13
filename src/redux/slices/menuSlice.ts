import { createSlice } from '@reduxjs/toolkit';

interface MenuItemState {
  selectedId: string;
}

const initialState: MenuItemState = {
  selectedId: '',
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectMenuItem: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const { selectMenuItem } = menuSlice.actions;

export default menuSlice.reducer;
