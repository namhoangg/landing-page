import { useLazyGetPresignedUrlPublicQuery, useUploadBase64ToS3Mutation } from '@/services';
import { v4 } from 'uuid';

const useUpload = () => {
  // const [uploadFile] = useUploadFileTrustedMutation();
  const [uploadBase64ToS3] = useUploadBase64ToS3Mutation();

  const [getPreSignedUrl] = useLazyGetPresignedUrlPublicQuery();

  const findSrcOfImage = (textContent: string) => {
    const regexSrc = /<img[^>]*src="([^"]+)">/;
    const match = textContent.match(regexSrc) ?? '';
    const urlMatch = /src="([^"]+)"/.exec(match[0]);

    return urlMatch ? urlMatch[1] : '';
  };

  const convertToSubPaths = async (textContent: string, subPath: string) => {
    const regexImageElement = /<img[^>]*src="([^"]+)">/g;
    const matches = textContent.match(regexImageElement);
    let formatTextContext = textContent;

    if (matches && matches.length > 0) {
      await Promise.allSettled(
        matches.map(async (key, index) => {
          const src = findSrcOfImage(matches[index]);
          const isBase64 = src.includes('data:image');

          if (isBase64) {
            const base64 = src.split(',', 2).pop() ?? '';
            const contentType = src.split(';', 2).shift()?.split(':').pop() ?? '';
            const subPathConverted = `${subPath}/${v4()}.${contentType.split('/').pop()}`;

            const preSignedUrl = await getPreSignedUrl({
              sub_path: subPathConverted,
              type: 'upload',
            }).unwrap();

            await uploadBase64ToS3({ base64, contentType, preSignedUrl });
            formatTextContext = formatTextContext.replace(src, subPathConverted);
          }
        }),
      );
    }

    return formatTextContext;
  };

  return { convertToSubPaths, uploadBase64ToS3 };
};

export default useUpload;
