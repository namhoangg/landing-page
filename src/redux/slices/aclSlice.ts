import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IEvaluateRes } from '../../types';

export interface IACLSliceProps {
  permissions: IEvaluateRes[];
}

const initialState: IACLSliceProps = {
  permissions: [],
};

export const aclSlice = createSlice({
  name: 'acl',
  initialState,
  reducers: {
    savePermissionACL: (state, action: PayloadAction<IACLSliceProps>) => {
      state.permissions = action.payload.permissions;
    },
  },
});

export const { savePermissionACL } = aclSlice.actions;

export default aclSlice.reducer;
