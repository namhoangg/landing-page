import React, { PropsWithChildren } from 'react';

import { styled } from 'styled-components';
import { GetImage, IImageProps } from '../Image';

type Props = PropsWithChildren<
  {
    width?: number | `${number}${'em' | 'rem' | '%'}`;
    height?: number | `${number}${'em' | 'rem' | '%'}`;
    onClick?: () => void;
    className?: string;
  } & Omit<IImageProps, 'width' | 'height'>
>;

const Div = styled.div<Pick<Props, 'width' | 'height'>>`
  width: ${({ width }) => (typeof width === 'number' ? `${width / 16}rem` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height / 16}rem` : height)};
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    /* object-fit: cover; */
    height: 100% !important;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

function BoxImage({ className, onClick, width = '100%', height = '100%', ...restImage }: Props) {
  return (
    <Div
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      <GetImage {...restImage} />
    </Div>
  );
}

export default BoxImage;
