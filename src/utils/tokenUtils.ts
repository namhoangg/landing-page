/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocalStorageKey } from '@/constants';
import {
  clearLocalStorage,
  clearSessionStorage,
  getFromLocalStorage,
  getFromSessionStorage,
  setToLocalStorage,
  setToSessionStorage,
} from '@/utils';

export const clearToken = () => {
  clearLocalStorage();
  clearSessionStorage();
};

export const getAccessToken = (): string | null => {
  // return getFromSessionStorage(SessionStorageKey.ACCESS_TOKEN);
  return (
    getFromLocalStorage(LocalStorageKey.ACCESS_TOKEN) ||
    getFromSessionStorage(LocalStorageKey.ACCESS_TOKEN)
  );
};

export const setAccessToken = (key: string, value: any) => {
  return setToSessionStorage(key, value);
};

export const getRefreshToken = () => {
  return getFromLocalStorage(LocalStorageKey.REFRESH_TOKEN);
};

export const setRefreshToken = (key: string, value: any) => {
  return setToLocalStorage(key, value);
};

export const decodeJwt = (token: string | null) => {
  if (!token) {
    return null;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(base64));
};
