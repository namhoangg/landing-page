import { LANGS, LocalStorageKey } from '@/constants';
import { getFromLocalStorage } from '@/utils';

export const getValueByLanguage = (valueEN: string | undefined, valueVI: string | undefined) => {
  const language = getFromLocalStorage(LocalStorageKey.LANG);

  if (language === LANGS.VI) {
    return valueVI || valueEN;
  }

  return valueEN || valueVI;
};

export const getExactValueByLanguage = (
  valueEN: string | undefined,
  valueVI: string | undefined,
) => {
  const language = getFromLocalStorage(LocalStorageKey.LANG);

  return language === LANGS.VI ? (valueVI ?? '-') : (valueEN ?? '-');
};

export const getDisplayByLang = (lang: string, valueEN: string, valueVI: string) => {
  if (lang === LANGS.VI) {
    return valueVI || valueEN;
  }

  return valueEN || valueVI;
};
