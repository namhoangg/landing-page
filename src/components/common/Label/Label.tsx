import { StyledLabel } from './styles';
import { useTranslation } from 'react-i18next';

interface LabelProps {
  value: string | number;
}

const Label = ({ value }: LabelProps) => {
  const { t } = useTranslation();

  return (
    <StyledLabel value={value}>
      <div className='circle' />
      <div className='name'>{t(`admin.formsSubmissions.label.${value}`)}</div>
    </StyledLabel>
  );
};

export default Label;
