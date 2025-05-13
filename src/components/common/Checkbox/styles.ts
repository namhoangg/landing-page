import styled from 'styled-components';
import { theme } from '@/styles';

const { colors } = theme;
export const StyledCheckbox = styled.div`
  .ant-checkbox-wrapper {
    .ant-checkbox {
      .ant-checkbox-inner {
        width: 22px;
        height: 22px;
      }
    }

    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${colors.YELLOW};
        border-color: ${colors.YELLOW};

        &:after {
          inset-inline-start: 30% !important;
        }
      }
    }

    .ant-checkbox:hover .ant-checkbox-inner {
      opacity: 0.8;
      background-color: #ffefae !important;
      border-color: ${colors.YELLOW} !important;
    }

    .ant-checkbox-checked:hover .ant-checkbox-inner {
      opacity: 0.8;
      background-color: ${colors.YELLOW} !important;
      border-color: ${colors.YELLOW} !important;
    }

    &:hover .ant-checkbox-inner {
      border-color: ${colors.YELLOW} !important;
    }

    &:hover .ant-checkbox-checked .ant-checkbox-inner {
      opacity: 0.8;
      background-color: ${colors.YELLOW} !important;
      border-color: ${colors.YELLOW} !important;
    }
  }
`;
