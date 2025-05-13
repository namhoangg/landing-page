import { HTMLProps } from 'react';
import * as Styled from './styles';

interface CardContainerProps extends HTMLProps<HTMLDivElement> {
  src?: string;
  alt?: string;
  className?: string;
  defaultImage?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  src,
  defaultImage,
  alt,
  className,
  ...props
}) => {
  return (
    <Styled.StyledCardContainer className={className}>
      <Styled.StyledCardContainerBackground
        src={src}
        defaultImage={defaultImage}
        alt={alt ?? ''}
      />
      <Styled.StyledCardContainerContent>{props.children}</Styled.StyledCardContainerContent>
    </Styled.StyledCardContainer>
  );
};

export default CardContainer;
