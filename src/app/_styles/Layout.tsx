import { flex, theme } from '@/styles';
import { styled } from 'styled-components';

const { zIndexs, fontSizes, colors } = theme;

export const StyledLoading = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.BLACK};
  z-index: ${zIndexs.MAXIMUM};
  ${flex('center', 'center')};
  flex-direction: column;
  gap: 20px;

  .dots-loading {
    ${flex('center', 'center')};
    gap: 0 10px;
  }

  .loading__title {
    font-size: ${fontSizes.M};
    font-weight: 500;
    color: ${colors.WHITE};
  }
`;

interface IProps {
  $delay?: string;
}

export const StyledDot = styled.div<IProps>`
  --delay: ${(props) => props.$delay};

  width: 10px;
  height: 10px;
  border-radius: 100rem;
  background-color: ${colors.YELLOW};
  animation: stagger 0.5s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94) alternate;
  animation-delay: calc(-1 * (0.5 / 4) * var(--delay));

  @keyframes stagger {
    0% {
      transform: translateY(0);
    }
    50%,
    100% {
      transform: translateY(20px);
    }
  }
`;
