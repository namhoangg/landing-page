import { SVGProps } from 'react';
import { StyledLogoText, StyledImage, StyledLogo } from '../styles';
import FreightFlexLogo from '@/public/imgs/freight-removebg-preview.png';

interface HeaderLogoProps extends SVGProps<SVGSVGElement> {
  isMobile?: boolean;
}

export const Logo = ({ isMobile }: HeaderLogoProps) => {
  return (
    <StyledLogo className="custom-logo">
      <StyledImage isMobile={isMobile} src={FreightFlexLogo.src} />
      {isMobile ? '' : <StyledLogoText>FreightFlex</StyledLogoText>}
    </StyledLogo>
  )
};
