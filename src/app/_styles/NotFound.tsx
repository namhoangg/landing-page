'use client';
import { styled } from 'styled-components';

export const StyledPageNotFound = styled.div`
  padding: 5.625em 6.25em 0 6.25em;
  background: ${(props) => props.theme.colors.WHITE};
  .left-content {
    background: ${(props) => props.theme.colors.WHITE};
    padding: 13.063em 9.813em 18.688em 0;
    @media (max-width: 1200px) {
      padding: 1.875em 1em 2.5em 1em;
    }
  }
  .right-content {
    background: ${(props) => props.theme.colors.WHITE};
    padding: 10em 8.813em 15.625em 0;

    @media (max-width: 1200px) {
      padding: 0 1em 2.5em 1em;
    }
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizes.XL5};
    padding-bottom: 2.188em;
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.XL};
    color: ${(props) => props.theme.colors.GRAY_DARK};
    padding-bottom: 1.5em;
  }
  .btn-home {
    color: ${(props) => props.theme.colors.WHITE};
    background: ${(props) => props.theme.colors.YELLOW};
    gap: 1.875em;
    width: 8.75em;
    height: 2.75em;
    font-size: ${(props) => props.theme.fontSizes.XS};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
