import { css } from 'styled-components';

export const floatingEffectHorizontal = css`
  @keyframes floatingAnimationHorizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-20px);
    }
  }
  animation: floatingAnimationHorizontal 3s ease infinite;
`;

export const floatingUpToDownEffect = css`
  @keyframes floatingUpToDownAnimation {
    0%,
    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-1.25em);
      -ms-transform: translateY(-1.25em);
      transform: translateY(-1.25em);
    }
  }
  animation: floatingUpToDownAnimation 3s ease infinite;
`;

export const floatingLeftToRightEffect = css`
  @keyframes floatingLeftToRightAnimation {
    0%,
    100% {
      -webkit-transform: translateX(-1em);
      -ms-transform: translateX(-1em);
      transform: translateX(-1em);
    }
    50% {
      -webkit-transform: translateX(0.625rem);
      -ms-transform: translateX(0.625rem);
      transform: translateX(0.625rem);
    }
  }
  animation: floatingLeftToRightAnimation 3s ease infinite;
`;
