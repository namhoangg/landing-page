import { ImageProps, Skeleton } from 'antd';
import { EyeIcon } from '@/components';
import { StyledPreviewImage } from './styles';

interface PreviewImageProps extends ImageProps {
  src: string;
  isLoading?: boolean;
}

const PreviewImage = ({ src, isLoading, ...props }: PreviewImageProps) => {
  return isLoading ? (
    <Skeleton.Image active={isLoading} />
  ) : src ? (
    <StyledPreviewImage
      src={src}
      preview={{
        mask: <EyeIcon style={{ fill: 'white !important', width: 'fitContent' }} />,
      }}
      {...props}
    />
  ) : (
    <Skeleton.Image active={false} />
  );
};

export default PreviewImage;
