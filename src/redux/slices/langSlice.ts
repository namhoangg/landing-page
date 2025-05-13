import { LocalStorageKey } from '@/constants';
import { getFromLocalStorage, setToLocalStorage } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

const lng = getFromLocalStorage(LocalStorageKey.LANG) as string;

interface LangState {
  lang: string | 'en' | 'vi';
}

const initialState: LangState = {
  lang: lng ? lng : 'en',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
      setToLocalStorage(LocalStorageKey.LANG, action.payload);
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
