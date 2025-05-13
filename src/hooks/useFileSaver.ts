import { saveAs } from 'file-saver';

const useFileSaver = () => {
  const saveFile = (blob: string | Blob, fileName?: string) => {
    saveAs(blob, fileName);
  };

  return { saveFile };
};

export default useFileSaver;
