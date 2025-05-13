import { IAuthenUser } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface PermissionState {
  user: IAuthenUser;
}

const initialState: PermissionState = {
  user: {} as IAuthenUser,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserGeneral: (state, action: PayloadAction<IAuthenUser>) => {
      state.user = action.payload;
    },
  },
});

export const { saveUserGeneral } = userSlice.actions;

export default userSlice.reducer;
