import styled from 'styled-components';
import { breakPoint, color, flex, fontSize, fontWeight, zIndex } from '@/styles';

export const StyledHeader = styled.div`
  padding: 1.5em 0 1em;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--max-width);
  z-index: ${zIndex.HIGH};
  background-color: ${color.WHITE};

  -webkit-transition: background-color 0.3s ease-in-out;
  -o-transition: background-color 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
  max-width: 100%;

  .bg-white {
    background-color: ${color.WHITE};
  }

  &.bg-transparent {
    background-color: transparent;
    color: ${color.WHITE};
    @media screen and (max-width: ${breakPoint.XS}) {
      background-color: ${color.WHITE};
    }

    .header-nav {
      &__menu,
      &__menu--mobile {
        color: ${color.WHITE};

        @media screen and (max-width: ${breakPoint.MD}) {
          color: ${color.GRAY_DARK};
        }
      }
    }
  }

  @media screen and (max-width: ${breakPoint.LG}) {
    padding: 0.75em 1em;
  }

  @media screen and (max-width: ${breakPoint.MD}) {
    padding: 0.75em 1em;
  }

  @media screen and (max-width: ${breakPoint.SM}) {
    position: sticky;
    padding: 0.75em 1em;
    left: 0;
    transform: none;
  }

  .header-logo {
  }

  .header-nav {
    ${flex('end', 'center')};
    gap: 2em;

    @media screen and (max-width: ${breakPoint.MD}) {
      gap: 0;
      flex-direction: row-reverse;
    }

    &__menu,
    &__menu--mobile {
      list-style: none;
      display: flex;
      color: ${color.GRAY_DARK};
    }

    &__menu--mobile {
      width: 100vw;
      background-color: ${color.WHITE};
      visibility: hidden;

      &.opened {
        visibility: visible;
      }
    }

    .sub-menu {
      &--lv1 {
        position: absolute;
        display: none;
        padding: 1.5em;
        width: max-content;
        background-color: ${color.WHITE};
        border-radius: 6px;
        top: 2.5em;
        left: -3em;
        box-shadow:
          0 1px 5px 0 rgba(0, 0, 0, 0.03),
          0 2px 18px 0 rgba(0, 0, 0, 0.02),
          0 9px 60px 0 rgba(0, 0, 0, 0.05);

        &.sub-menu--mobile {
          position: relative;
          padding: 1em 1.5em 0;
          top: 0;
          left: 0;
          background-color: transparent;
          box-shadow: none;
          border-radius: 0;
        }
      }

      &--lv2 {
        display: none;
        margin-top: 1em;
        padding-left: 0.625em;

        &.opened {
          display: block;
        }
      }

      &--mobile {
        width: 100%;
      }
    }

    .menu-item,
    .sub-menu-item {
      cursor: pointer;
    }

    .menu-item {
      &.opened .menu-item__label,
      &:not(.menu-item--mobile) .menu-item__label:hover {
        /* font-weight: ${fontWeight.SEMI_BOLD}; */
        text-decoration: underline;
        text-decoration-color: ${color.YELLOW};
        text-decoration-skip-ink: none;
        text-decoration-thickness: 2px;
        text-underline-offset: 0.5em;
        color: ${color.YELLOW};
        -webkit-text-stroke-width: 0.5px;
        @media screen and (max-width: ${breakPoint.MD}) {
          color: ${color.BLACK};
        }
      }
    }

    .sub-menu-item {
      color: ${color.BLACK};
      font-weight: ${fontWeight.SEMI_BOLD};

      &.opened {
        color: ${color.YELLOW};
      }
    }

    .sub-menu-item.sub-menu-item--lv2 {
      color: ${color.GRAY_DARK};
    }

    &__menu {
      gap: 2.125em;
      margin: 0;
      height: 100%;
      transform: translateY(25%);

      @media screen and (max-width: ${breakPoint.MD}) {
        height: inherit;
        transform: none;
      }

      .menu-item {
        position: relative;

        &.opened {
          .sub-menu--lv1 {
            display: block;
          }
        }

        &__label {
          font-size: ${fontSize.S};
        }

        &__icon {
          font-size: ${fontSize.XXS};
        }
      }

      .sub-menu-item {
        ${flex('flex-start', 'center')};
        padding: 1em 0 0;

        &--lv1 {
          font-weight: 600;
        }

        &--lv2 {
          font-weight: 400;
        }

        &:first-of-type {
          padding-top: 0;
        }

        &__main {
          border-bottom: 1px solid ${color.GRAY_LIGHT};
          padding-bottom: 1em;
          padding-top: 0;
          gap: 1em;
        }

        &__parent {
          ${flex('space-between', 'center')};
        }

        &__label {
        }

        .icon {
          ${flex('center', 'center')};
          margin-left: 0.5em;
        }

        &__icon {
          transition: transform 0.3s ease;
        }
      }

      .sub-menu-item:hover {
        color: ${color.YELLOW};
      }
    }

    &__menu--mobile {
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
      gap: 1em;
      padding: 1em;
    }

    &__button {
      height: 2.625em;

      .btn__label {
        text-transform: uppercase;
      }
    }

    &__toggler {
      padding-right: 0;
    }
  }

  &.transparent {
    background-color: ${color.WHITE} !important;
    -webkit-box-shadow: 0 0.125em 0.5em ${color.PRIMARY_GRAY};
    box-shadow: 0 0.125em 0.5em ${color.PRIMARY_GRAY};

    &:not(.mobile) {
      background-color: transparent;
    }

    .header-nav__menu:not(.header-nav__menu--mobile) {
      /* color: ${color.WHITE}; */
      color: ${color.GRAY_DARK};
    }
  }
`;
export const StyledLogo = styled.header`
  transition: all 0.3s;
  &.custom-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
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
  color: black;
  font-family: 'Roboto', sans-serif;
`;
