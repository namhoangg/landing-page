/* eslint-disable @typescript-eslint/no-explicit-any */

import { uniqueId } from 'lodash';

interface EValue {
  id: string | number;
  key: string;
  value: any;
}

type TEnumType = { [key: string]: string | number };

export const enumToArray = (inputEnum: TEnumType): EValue[] => {
  return Object.entries(inputEnum)
    .filter(([key]) => typeof inputEnum[key as unknown as number] !== 'string')
    .map(([key, value]) => ({ id: uniqueId(), key, value }));
};

export const enumWithoutNumberToArray = (inputEnum: TEnumType): EValue[] => {
  return Object.entries(inputEnum).map(([key, value]) => ({ id: uniqueId(), key, value }));
};
