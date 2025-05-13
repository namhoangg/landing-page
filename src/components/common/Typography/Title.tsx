import { FC } from 'react';
import { IStyled, StyledTitle } from './styles';

interface IProps extends IStyled {
  className?: string;
  onClick?: () => void;
}
const Title: FC<IProps> = ({ className, ...props }) => {
  return (
    <StyledTitle
      {...props}
      className={className}
    />
  );
};

export default Title;
