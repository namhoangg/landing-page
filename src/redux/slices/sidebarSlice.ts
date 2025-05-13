import { LocalStorageKey } from '@/constants';
import { getFromLocalStorage, setToLocalStorage } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

const isOpen = getFromLocalStorage(LocalStorageKey.OPEN_SIDEBAR) as boolean;

const initialState: { isOpen: boolean } = {
  isOpen: !!isOpen,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeSidebar: (state) => {
      state.isOpen = !state.isOpen;
      setToLocalStorage(LocalStorageKey.OPEN_SIDEBAR, state.isOpen);
    },
  },
});

export const { changeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
