import * as Styled from './styles';

interface TextDividerProps {
  content: string;
}

const TextDivider = ({ content }: TextDividerProps) => {
  return <Styled.StyledTextDivider>{content}</Styled.StyledTextDivider>;
};

export default TextDivider;
