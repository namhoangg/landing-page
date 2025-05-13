import { StyledHeading } from './styles';
import { ReactNode } from 'react';

interface HeadingProps {
  className?: string;
  subTitle?: string | ReactNode;
  title: string | ReactNode;
  description: ReactNode;
  level?: number;
}

const Heading = ({ className, subTitle, title, description, level = 1 }: HeadingProps) => {
  return (
    <StyledHeading className={className}>
      {subTitle && <p className='sub-title'>{subTitle}</p>}
      {level === 1 && <h1 className='title'>{title}</h1>}
      {level === 2 && <h2 className='title'>{title}</h2>}
      {level === 3 && <h3 className='title'>{title}</h3>}
      <p className='description'>{description}</p>
    </StyledHeading>
  );
};

export default Heading;
