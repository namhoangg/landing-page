import { theme } from '@/styles';
import { StaticImageData } from 'next/image';
import styled from 'styled-components';

interface ParallaxLayerProps {
  src: string | StaticImageData;
}

export const ParallaxContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ParallaxLayer = styled.div<ParallaxLayerProps>`
  padding: 3.75em 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  background: #ffffff url(${(props) => props.src as string});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  @media screen and (max-width: ${theme.breakPoints.MD}) {
    padding: 1em;
  }
`;
