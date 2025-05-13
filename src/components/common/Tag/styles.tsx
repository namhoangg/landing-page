import { theme } from '@/styles';
import styled from 'styled-components';

export const StyledTopicsTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const StyledBtnFeature = styled.button<{
  $buttonType?: 'big' | 'small';
  $ghostType?: 'dark' | 'light';
}>`
  padding: ${({ $buttonType }) => ($buttonType === 'big' ? '0.5rem 1.25rem' : '0.25rem 0.5rem')};
  border-radius: ${({ $buttonType }) => ($buttonType === 'big' ? '8px' : '4px')};
  border: 1px solid
    ${({ $ghostType }) =>
      $ghostType === 'dark' ? `${theme.colors.GRAY_LIGHT}` : `${theme.colors.WHITE}`};
  background: ${({ $ghostType }) =>
    $ghostType === 'dark' ? `${theme.colors.BLACK_WHITE_LIGHT}` : `rgba(255, 255, 255, 0.3)`};
  backdrop-filter: blur(2px);
  color: ${({ $ghostType }) =>
    $ghostType === 'light' ? `${theme.colors.WHITE}` : `${theme.colors.GRAY_DARK}`};
  font-size: ${({ $buttonType }) =>
    $buttonType === 'small' ? `${theme.fontSizes.XS}` : `${theme.fontSizes.S}`};
  font-weight: ${theme.fontWeights.NORMAL};
  line-height: 1.4rem;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.YELLOW};
    color: ${theme.colors.YELLOW};
  }
`;
