import { IESGCtx } from '@/types';
import { createContext } from 'react';

export const ESGCtx = createContext<IESGCtx>({
  dataDetail: undefined,
});
