import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

export const StyledDefaultLayout = styled.div``;

export const StyledContent = styled(Content)`
  & {
    padding: 24px 40px !important;
    height: fit-content;
  }
`;
