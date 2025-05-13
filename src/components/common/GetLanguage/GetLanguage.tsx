import { uniqueId } from 'lodash';
import React, { memo } from 'react';
import { Container } from './styles';
import { CustomizeImage } from '@/components';
import { EnglishIcon, VietnameseIcon } from '@/public/imgs';

interface IProps {
  viName?: string;
  enName?: string;
}

const GetLanguage = ({ viName, enName }: IProps) => {
  return (
    <Container>
      {viName && (
        <div
          className='lang'
          key={uniqueId()}
        >
          <CustomizeImage
            src={VietnameseIcon.src}
            alt='language'
          />
        </div>
      )}
      {enName && (
        <div
          className='lang'
          key={uniqueId()}
        >
          <CustomizeImage
            src={EnglishIcon.src}
            alt='language'
          />
        </div>
      )}
    </Container>
  );
};

export default memo(GetLanguage);
