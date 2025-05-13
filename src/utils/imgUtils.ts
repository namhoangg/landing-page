export async function convertToWebp(image: string) {
  if (!isWebpSupported()) return image;

  const img = new Image();

  if (image.startsWith('data:image')) {
    img.src = image;
  } else {
    img.crossOrigin = 'anonymous';
    img.src = image;
  }

  return new Promise<string>((resolve) => {
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob as Blob);
          reader.onloadend = () => {
            const base64data = reader.result as string;
            resolve(
              base64data.replace(/^data:image\/(png|jpg);base64,/, 'data:image/webp;base64,'),
            );
          };
        },
        'image/webp',
        0.8,
      );
    };
  });
}

export function isWebpSupported(): boolean {
  const elem = document.createElement('canvas');

  if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}
