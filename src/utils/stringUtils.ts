export function normalizeString(str: string = '') {
  // Normalize the string by removing diacritical marks and converting to lowercase
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/đ/g, 'd');
}

export const generateSlug = (str: string) => {
  const title = normalizeString(str);
  return title
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
    .replace(/-$/, '');
};

export const trimString = (str: string, char: string) => {
  return str.replace(new RegExp(`^${char}+|${char}+$`, 'g'), '');
};

export const getTitleSplit = (str: string = '') => {
  const strSplits = str.split(' ');
  const length = strSplits.length;

  return {
    firstString: strSplits.slice(0, Math.ceil(length / 2)).join(' '),
    lastString: strSplits.slice(Math.ceil(length / 2), str.length).join(' '),
  };
};
