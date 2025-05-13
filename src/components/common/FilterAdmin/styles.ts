import styled from 'styled-components';
import { flex } from '@/styles';
import { Badge } from 'antd';

export const StyledFilterAdmin = styled.div`
  .filter {
    ${flex('space-between', 'center')};
    margin-bottom: 1em;

    &__left {
      display: flex;
      gap: 14px;
    }

    &__right {
      display: flex;
      gap: 14px;

      &-button {
        span {
          top: 0 !important;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const StyledBadge = styled(Badge)`
  .ant-badge-dot {
    width: 10px;
    height: 10px;
    top: 6%;
    left: 86%;
  }
`;
