import { breakPoint, color, flex, fontSize, fontWeight, zIndex } from '@/styles';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  position: relative;
  z-index: ${zIndex.NORMAL};
  background-color: ${color.BLACK};
  color: ${color.BLACK_WHITE};
  padding: 1.875em 0 1.25em;

  a {
    color: ${color.BLACK_WHITE};
    transition: color 0.4s ease-in-out;

    &:hover {
      color: ${color.YELLOW};
    }
  }

  .footer-top {
    @media screen and (max-width: ${breakPoint.LG}) {
      padding-left: 1em;
      padding-right: 1em;
    }

    .footer-logo {
    }

    .footer-nav {
      @media screen and (max-width: ${breakPoint.SM}) {
        margin-top: 1.5em;
      }

      .nav-title {
        font-size: ${fontSize.M};
        font-weight: ${fontWeight.SEMI_BOLD};
      }

      .nav-items {
        list-style: none;

        @media screen and (max-width: ${breakPoint.SM}) {
          margin-bottom: 1.4em;
        }
      }

      .nav-item {
        margin-top: 0.75em;
        font-size: ${fontSize.S};

        &.is-large {
          font-size: ${fontSize.M};
          font-weight: 600;
          line-height: 140%;
        }
      }

      p.nav-item {
        cursor: pointer;
        transition: color 0.4s ease-in-out;

        &:hover {
          color: ${color.YELLOW};
        }
      }
    }

    .footer-social {
      @media screen and (max-width: ${breakPoint.SM}) {
      }

      .nav-title {
        font-size: ${fontSize.M};
        font-weight: ${fontWeight.SEMI_BOLD};
        padding-left: 0.75em;

        @media screen and (max-width: ${breakPoint.LG}) {
          padding-left: 0;
        }
      }

      .nav-link:not(:last-of-type) {
        margin-right: 0.5em;
      }
    }
  }

  .footer-divider {
    border: 0.5px solid ${color.WHITE};
    margin: 1em 0;
  }

  .footer-down {
    @media screen and (max-width: ${breakPoint.LG}) {
      padding-left: 1em;
      padding-right: 1em;
    }

    .footer-copyright {
      color: ${color.GRAY_LIGHT};
      text-align: center;
      font-size: ${fontSize.XXS};
      font-weight: ${fontWeight.NORMAL};
      line-height: 130%;

      @media screen and (max-width: ${breakPoint.SM}) {
        text-align: center;
      }
    }

    .footer-others {
      ${flex('end', 'center')};
      font-size: ${fontSize.XS};
      gap: 1.5em;
    }
  }
`;

export const StyledLogo = styled.header`
  transition: all 0.3s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledImage = styled.img`
  max-width: 60px;
  height: auto;
  display: block;
  vertical-align: middle;
`;

export const StyledLogoText = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

