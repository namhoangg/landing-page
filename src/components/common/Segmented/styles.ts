import styled from 'styled-components';
import { Segmented, SegmentedProps } from 'antd';
import { color } from '@/styles';

export const StyledSegmented = styled(Segmented)<SegmentedProps>`
  .ant-segmented-item-selected {
    background: ${color.YELLOW};
    color: ${color.WHITE};
  }
`;
