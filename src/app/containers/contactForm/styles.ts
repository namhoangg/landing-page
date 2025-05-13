import { Button, Input, Select, Text } from '@/components';
import { flex, theme } from '@/styles';
import styled from 'styled-components';

export const { colors, breakPoints, zIndexs, fontSizes, fontWeights } = theme;

export const FormContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, ${colors.WHITE} 50%, ${colors.BLACK_LIGHT} 50%);
  margin-top: 4em;
  @media screen and (max-width: ${breakPoints.MD}) {
    margin-top: 0;
  }
  padding: 40px 0;

  .form__title {
    margin-bottom: 1em !important;
  }
`;

export const StyledForm = styled.form`
  /* max-width: 1240px; */
  margin: 0 auto;
  /* margin: 4em auto; */
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow:
    0 1px 5px 0 rgba(0, 0, 0, 0.03),
    0 2px 18px 0 rgba(0, 0, 0, 0.02),
    0 9px 60px 0 rgba(0, 0, 0, 0.05);
`;
export const StyledFormInputs = styled.div`
  ${flex('start', 'start')}
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  ${flex('start', 'start')}
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
  flex-basis: calc(33.33% - 10px);
`;

export const InputField = styled.input`
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  outline: none;
`;

export const SubmitButton = styled(Button)`
  & {
    width: 200px;
    margin: 0 auto;
  }
`;

export const StyledText = styled(Text)`
  font-style: italic;
`;

export const StyledInput = styled(Input)`
  /* border: 1px solid ${colors.GRAY_LIGHT} !important; */
`;

export const StyledSelect = styled(Select)`
  /* border: 1px solid ${colors.GRAY_LIGHT} !important; */
  /* border-radius: 1em !important; */
`;

export const ModalContent = styled.div`
  ${flex('center', 'center')};
  flex-direction: column;
  gap: 1em;
`;

export const StyledSuccessText = styled(Text)`
  font-size: ${fontSizes.S} !important;
  text-align: center;
  padding: 0 0.375em 0.375em 0.375em;
  text-align: center;
  @media screen and (max-width: ${breakPoints.MD}) {
    /* padding: 0 2em !important; */
  }
`;
