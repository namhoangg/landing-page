const useFormatFile = () => {
  const parseBlobToBase64 = (data: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(data);
    });
  };

  const parseBlobToCSV = (data: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const csvContent = reader.result;
        resolve(csvContent);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(data);
    });
  };

  const parseBase64ToFile = (url: string, filename: string, mimeType: string) => {
    if (url.startsWith('data:')) {
      const arr = url.split(',');
      const mime = (arr[0].match(/:(.*?);/) ?? [])[1];
      const extension = mime.split('/')[1];
      const bstr = atob(arr[arr.length - 1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      const file = new File([u8arr], `${filename}.${extension}`, { type: mime || mimeType });

      return Promise.resolve(file);
    }

    return fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], `${filename}`, { type: mimeType }));
  };

  return { parseBlobToBase64, parseBlobToCSV, parseBase64ToFile };
};

export default useFormatFile;
