import { IInnovationHubDetailContext } from '@/types';
import { createContext } from 'react';

export const InnovationHubDetailContext = createContext<IInnovationHubDetailContext>({
  portfolioData: undefined,
});
