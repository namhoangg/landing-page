import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { theme } from '@/styles';

export const StyledSwiper = styled(Swiper)`
  position: relative;

  .swiper-pagination {
    position: absolute;
    bottom: 5%;
  }

  .swiper-pagination-bullet {
    width: 0.5em;
    height: 0.4375em;
    margin: 0 1px !important;
  }

  .swiper-pagination-bullet-active {
    width: 1.875em;
    height: 0.4375em;
    border-radius: 0.375em;
    background: ${theme.colors.YELLOW};
  }
`;

export const StyledNavigationButtonContainer = styled.div`
  /* margin: 0 2em; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: ${theme.zIndexs.NORMAL};
`;

export const StyledNavigationBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: rgba(243, 243, 243, 0.3);

  &:hover {
    background-color: rgba(243, 243, 243, 0.6);
  }

  @media screen and (max-width: ${theme.breakPoints.MD}) {
    display: none;
  }

  svg {
    path {
      stroke: ${theme.colors.WHITE};
    }
  }
`;
