import { StyledSegmented } from './styles';
import { SegmentedProps } from 'antd';

interface CustomSegmentedProps extends SegmentedProps {}

const CustomSegmented = ({ ...props }: CustomSegmentedProps) => {
  return <StyledSegmented {...props} />;
};

export default CustomSegmented;
