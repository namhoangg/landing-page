import { ICaseStudyDetailContext } from '@/types';
import { createContext } from 'react';

export const CaseStudyDetailContext = createContext<ICaseStudyDetailContext>({
  portfolioData: undefined,
});
