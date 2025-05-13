import { Title } from '@/components';
import { breakPoint, color, flex, fontSize, fontWeight, textEllipsis, theme } from '@/styles';
import styled from 'styled-components';

export const HomepageStyled = styled.div`
  overflow: hidden;

  &:hover {
    .xxxx {
      fill: ${theme.colors.YELLOW};
    }
  }

  .text-gradient {
    background: ${theme.colors.YELLOW_GRADIENT};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .img {
    width: 100%;
    height: 100% !important;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }

  .banner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
      z-index: 1;
    }

    &__buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-top: 2rem;
      text-decoration: none;

      @media screen and (max-width: ${theme.breakPoints.MD}) {
        flex-direction: column;
        gap: 1rem;
        padding: 0 1rem;
      }

      a {
        text-decoration: none;
      }
    }

    &__button {
      padding: 1rem 2.5rem;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      cursor: pointer;

      &--primary {
        background-color: #2563eb; // Changed to blue
        color: white;
        border: none;

        &:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
      }

      &--secondary {
        background-color: rgba(255, 255, 255, 0.1); /* Softer, more elegant transparency */
        color: #f8f8f8; /* Slightly off-white for a modern look */
        border: 2px solid rgba(255, 255, 255, 0.6); /* Reduce opacity for a refined effect */

        &:hover {
          background-color: rgba(255, 255, 255, 0.3); /* More noticeable but not overpowering */
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2); /* Slightly stronger shadow for depth */
        }
      }

      @media screen and (max-width: ${theme.breakPoints.MD}) {
        width: 100%;
        padding: 0.875rem 2rem;
        font-size: 1rem;
      }
    }

    &__background-img {
      width: 100%;
      @media screen and (max-width: ${theme.breakPoints.XS}) {
        width: auto;
        height: 47rem;
        left: -112%;
        position: relative;
      }
    }

    &__content {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -30%);
      font-size: 3.5rem;
      font-weight: 800;
      text-align: center;
      color: white;
      width: 100%;
      max-width: 1200px;
      padding: 0 1rem;
      z-index: 2;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      letter-spacing: -0.02em; // Slightly tighter letter spacing

      @media screen and (max-width: 768px) {
        font-size: 2.5rem;
        padding: 0 1.7rem;
      }
    }

    &__title {
      font-size: 1.5rem;
      margin-top: 1.5rem;
      font-weight: normal;
      max-width: 48rem;
      margin-left: auto;
      margin-right: auto;
      color: rgba(255, 255, 255, 0.9); // Slightly softer white for subtitle
      line-height: 1.5;
      letter-spacing: normal;

      @media screen and (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }

  .container-first {
    position: relative;
    height: 22em;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      position: absolute;
      font-size: ${theme.fontSizes.XL5};
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        font-size: ${theme.fontSizes.XL3};
        margin: 0 1.7rem;
      }
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      text-align: center;
      z-index: 2;
    }

    &__right {
      /* position: absolute; */
      z-index: 1;
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        left: 36%;
        top: 29%;
      }
    }

    &__fist-line {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__bottom {
      position: absolute;
      width: 15em;
      right: 0%;
      top: 15%;
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        display: none;
      }
    }
  }

  .container-second {
    background-color: ${theme.colors.BLACK_WHITE_LIGHT};
    padding-top: 3.75em;
    padding-bottom: 3.75em;
    padding-left: var(--padding);
    position: relative;

    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__title-1 {
      font-size: ${theme.fontSizes.XL5};
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0;
      text-align: left;
    }

    &__title-2 {
      font-size: ${theme.fontSizes.XL5};
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      line-height: ${theme.fontSizes.XL9};
      letter-spacing: 0;
      text-align: left;
    }

    &__title-3 {
      font-size: ${theme.fontSizes.XL5};
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      line-height: ${theme.fontSizes.XL7};
      letter-spacing: 0;
      text-align: left;
    }

    &__title-4 {
      font-size: ${theme.fontSizes.S};
      font-weight: ${theme.fontWeights.NORMAL};
      color: ${theme.colors.GRAY_DARK};
      line-height: 22px;
      letter-spacing: 0;
      text-align: left;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    &__row-2 {
      padding-left: 12em;
      margin-left: auto;
    }

    &__button {
      margin-bottom: 1.25em;
      border: none;
      width: 26em;
      font-size: 1.25rem;
      justify-content: left !important;
      font-weight: 400;

      &.active {
        background-color: ${theme.colors.YELLOW};
        color: ${theme.colors.WHITE};
        font-weight: ${theme.fontWeights.SEMI_BOLD};
      }
    }

    &__div-button {
      margin-top: 3.125em;
    }

    &__row-2 {
      .image-digital {
        &__div-img {
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow:
              0 1px 5px 0 rgba(0, 0, 0, 0.03),
              0 2px 18px 0 rgba(0, 0, 0, 0.02),
              0 9px 60px 0 rgba(0, 0, 0, 0.05);
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 1.46%,
              rgba(0, 0, 0, 0.48) 28.97%,
              rgba(0, 0, 0, 0.8) 118.03%
            );
            z-index: 1;
          }
        }

        &__title-content {
          .image-digital__title {
            line-height: 2.411rem;
            margin-bottom: 0.4em;
          }
        }
      }
    }
  }

  .container-third {
    padding: 3.75em 0;

    @media screen and (max-width: ${theme.breakPoints.MD}) {
      padding: 2.5rem 0 !important;
    }

    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__row-1 {
      max-width: 100%;
    }

    &__image {
      /* width: 30rem; */
      position: relative;
      overflow-x: visible;
      border-radius: 10px;
      height: 20rem;
      border-width: 0;
    }

    &__div-content-image {
      margin-left: 0.2em;
    }

    &__div-content {
      cursor: pointer;
    }

    &__content {
      position: relative;

      &:hover {
        .container-third__div-content {
          color: ${theme.colors.YELLOW};
        }

        .xxxx {
          fill: ${theme.colors.YELLOW};
        }
      }
    }

    &__div-content {
      position: absolute;
      display: flex;
      bottom: 6%;
      left: 6%;
      font-size: ${theme.fontSizes.XL};
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        font-size: ${theme.fontSizes.S};
      }
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      letter-spacing: 0;
      text-align: left;
      align-items: center;
      color: ${theme.colors.WHITE};

      &:hover {
        color: ${theme.colors.YELLOW};
      }
    }

    &__first {
      width: 26em;
    }

    &__title-2 {
      font-size: ${theme.fontSizes.XL5};
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      line-height: ${theme.fontSizes.XL8};
      letter-spacing: 0;
      text-align: left;
    }
  }

  .image-digital {
    position: relative;
    margin-left: auto;

    &:hover {
      .image-digital__title {
        color: ${theme.colors.YELLOW};
      }
    }

    &__title-content {
      position: absolute;
      color: ${theme.colors.WHITE};
      left: 10%;
      bottom: 7%;
      z-index: 3;
      width: 80%;
    }

    &__div-img {
      position: relative;
      z-index: 2;
    }

    &__content {
      font-size: ${theme.fontSizes.S};
      @media screen and (max-width: ${theme.breakPoints.SM}) {
        margin-right: 0.9rem;
      }
    }

    &__title {
      font-weight: ${theme.fontWeights.SEMI_BOLD};
      font-size: ${theme.fontSizes.XL4};
      letter-spacing: 0;
      text-align: left;
      font-variation-settings: 'slnt' 0;
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        font-size: ${theme.fontSizes.XL3};
        font-weight: ${theme.fontWeights.SEMI_BOLD};
        line-height: 2rem;
        letter-spacing: 0;
        text-align: left;
        font-variation-settings: 'slnt' 0;
      }
    }

    &__image {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &__number {
      font-size: 60px;
      font-weight: 700;
      line-height: 73px;
      letter-spacing: 0;
      text-align: left;
      color: ${theme.colors.GRAY_DARK};
      position: absolute;
      top: 47%;
      left: -18%;
      z-index: 1;
    }

    &__button {
      margin-top: 1em;
      background-color: rgba(0, 0, 0, 0.05);
      border: 1px solid ${color.WHITE};
      font-weight: ${fontWeight.SEMI_BOLD};
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        width: 100%;
        font-weight: ${theme.fontWeights.NORMAL};
      }
    }

    @media screen and (max-width: ${theme.breakPoints.MD}) {
      &__content {
        font-size: ${theme.fontSizes.XS};
        margin-top: 1rem;
        line-height: 1.25rem;
      }
    }
  }

  .image-digital-mobile {
    position: relative;
    float: right;
    @media screen and (max-width: ${theme.breakPoints.MD}) {
      float: none;
    }
    @media screen and (max-width: ${theme.breakPoints.SM}) {
      img {
        height: 467px !important;
      }
    }

    &__div-first {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin-top: 1.5rem;
    }

    &__div-first-1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0;
      text-align: center;
      color: ${theme.colors.GRAY_DARK};
    }
  }

  .container-fourth {
    background-color: ${theme.colors.BLACK_WHITE_LIGHT};
    padding: 3.75em 0;
    text-align: center;

    @media screen and (max-width: ${theme.breakPoints.MD}) {
      padding: 2.5rem 0 !important;
    }

    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__top {
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        padding-right: 1em;
      }
    }

    &__title-2 {
      font-size: ${theme.fontSizes.XL5};
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        font-size: ${theme.fontSizes.XL4};
      }
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
    }

    &__title-3 {
      color: ${theme.colors.GRAY_DARK};
      margin-bottom: 3.125em;
      margin-top: 1rem;
    }
  }

  .container-five {
    text-align: center;
    padding: 3.75em 0;

    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__image-element {
      justify-content: center;
      align-items: center;
      display: flex;

      img {
        object-fit: contain;
      }
    }

    @media screen and (max-width: ${theme.breakPoints.MD}) {
      padding: 2.5rem 0 !important;
      &__image-element {
        padding: 2.2em 1.125em;
        text-align: center;
      }
    }

    &-title {
      @media screen and (max-width: ${theme.breakPoints.SM}) {
        padding: 0 1rem;
      }
    }

    &__image {
      display: grid;
      margin-top: 2.5em;
      grid-template-columns: 11em 11em 11em 11em;
      justify-content: center;
      grid-gap: 2.8em;
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0;
      }
    }
  }

  .container-six {
    background-color: ${theme.colors.BLACK_WHITE_LIGHT};
    text-align: center;
    padding: 3.75em 0;

    @media screen and (max-width: ${theme.breakPoints.MD}) {
      padding: 2.5rem 0 !important;
    }

    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__image-logo {
      height: 5rem !important;

      @media screen and (max-width: ${theme.breakPoints.MD}) {
        height: 3.75rem !important;
      }

      img {
        object-fit: contain;
      }
    }

    &__image {
      margin-top: 2.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3.75em;

      div {
        justify-self: end;
      }
    }

    &__image-mobile {
      display: grid;
    }

    &__sub-title {
      color: ${theme.colors.GRAY_DARK};
    }
  }

  .container {
    &__stores-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    &__image {
      position: relative;
      height: 13.813em;
      border-radius: 0.5em;
      overflow: hidden;

      &:hover {
        cursor: pointer;

        .container__image-content-3 {
          color: ${theme.colors.YELLOW};
        }

        img {
          transform: scale(1.2);
        }
      }

      @media screen and (max-width: ${breakPoint.MD}) {
        height: 100%;
      }

      img {
        width: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }

    &__image-1 {
      position: relative;
      width: 38.125em;
      height: 28.875em;
      border-radius: 0.5em;
      overflow: hidden;

      &:hover {
        cursor: pointer;

        .container__image-content {
          color: ${theme.colors.YELLOW};
        }

        img {
          transform: scale(1.2);
        }
      }

      @media screen and (max-width: ${breakPoint.MD}) {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }
    }

    &__image-title-content {
      position: absolute;
      bottom: 6%;
      left: 7%;
    }

    &__image-title {
      color: ${theme.colors.YELLOW};
      font-size: ${theme.fontSizes.XS};
      font-weight: ${theme.fontWeights.SEMI_BOLD};
      letter-spacing: 0;
      text-align: left;
    }

    &__image-content {
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      font-size: ${theme.fontSizes.XL};
      letter-spacing: 0;
      line-height: 2.1rem;
      text-align: left;
      color: ${theme.colors.WHITE};

      &:hover {
        color: ${theme.colors.YELLOW};
        cursor: pointer;
      }
    }

    &__image-content-mobile {
      font-weight: ${theme.fontWeights.NORMAL};
      text-align: left;
      color: ${theme.colors.WHITE};
      font-size: ${theme.fontSizes.XS};
    }

    &__image-content-1 {
      letter-spacing: 0;
      text-align: left;
      color: ${theme.colors.WHITE};
      max-width: 90%;
    }

    &__image-content-3 {
      font-weight: ${theme.fontWeights.EXTRA_BOLD};
      font-size: ${theme.fontSizes.M};
      letter-spacing: 0;
      line-height: 2.1rem;
      text-align: left;
      color: ${theme.colors.WHITE};

      &:hover {
        color: ${theme.colors.YELLOW};
        cursor: pointer;
      }
    }
  }

  .container-seven {
    position: relative;
    text-align: center;
    padding: 3.75em 0;

    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__row-1 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 2.5em;
      @media screen and (max-width: ${theme.breakPoints.MD}) {
        grid-template-columns: 1fr;
        margin-top: 2.34em;
      }
      gap: 1rem;
    }

    &__button {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .container {
      &__stores-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      &__image {
        position: relative;
        height: 13.813em;
        border-radius: 0.5em;
        overflow: hidden;
        @media screen and (max-width: ${breakPoint.MD}) {
          height: 100%;
          aspect-ratio: 4/3;
        }
        @media screen and (max-width: ${breakPoint.SM}) {
          height: 100%;
          aspect-ratio: 1;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow:
            0 1px 5px 0 rgba(0, 0, 0, 0.03),
            0 2px 18px 0 rgba(0, 0, 0, 0.02),
            0 9px 60px 0 rgba(0, 0, 0, 0.05);
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 53.46%,
            rgba(0, 0, 0, 0.48) 68.97%,
            rgba(0, 0, 0, 0.8) 99.03%
          );
          z-index: 1;
        }

        &:hover {
          cursor: pointer;

          .container__image-content {
            color: ${color.YELLOW};
          }

          img {
            transform: scale(1.2);
          }
        }

        img {
          width: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }
      }

      &__image-1 {
        position: relative;
        width: 38.125em;
        min-height: 28.875em;
        border-radius: 0.5em;
        overflow: hidden;

        @media screen and (max-width: ${breakPoint.MD}) {
          width: 100%;
          height: 100%;
        }
        @media screen and (max-width: ${breakPoint.SM}) {
          width: 100%;
          height: 100%;
          aspect-ratio: 4/3;
          min-height: 0;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow:
            0 1px 5px 0 rgba(0, 0, 0, 0.03),
            0 2px 18px 0 rgba(0, 0, 0, 0.02),
            0 9px 60px 0 rgba(0, 0, 0, 0.05);
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 53.46%,
            rgba(0, 0, 0, 0.48) 68.97%,
            rgba(0, 0, 0, 0.8) 99.03%
          );
          z-index: 1;
        }

        &:hover {
          cursor: pointer;

          .container__image-content-big {
            color: ${color.YELLOW};
          }

          img {
            transform: scale(1.2);
          }
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
          pointer-events: none;
        }
      }

      &__image-title-content {
        position: absolute;
        bottom: 6%;
        left: 7%;
        z-index: 2;
      }

      &__image-title {
        color: ${color.YELLOW};
        font-size: ${fontSize.XS};
        font-weight: ${fontWeight.SEMI_BOLD};
        letter-spacing: 0;
        text-align: left;
      }

      &__image-content-big {
        color: ${color.WHITE};
        font-size: ${fontSize.XL};
        line-height: ${fontSize.XL4};
        font-weight: ${fontWeight.EXTRA_BOLD};
        letter-spacing: 0;
        text-align: left;
        display: block;
        padding: 0.25em 0;
        ${textEllipsis()} @media screen and(max-width: ${breakPoint.SM}) {
          font-size: ${fontSize.L};
          line-height: ${fontSize.XL};
        }
      }

      &__image-content {
        color: ${color.WHITE};
        font-size: ${fontSize.M};
        line-height: ${fontSize.XL2};
        font-weight: ${fontWeight.EXTRA_BOLD};
        letter-spacing: 0;
        text-align: left;
        display: block;
        padding: 0.25em 0;
        @media screen and (max-width: ${breakPoint.SM}) {
          font-size: ${fontSize.S};
          line-height: ${fontSize.XL};
        }

        & -3 {
          font-size: ${fontSize.M};
          line-height: 1.4;
          ${textEllipsis()} @media screen and(max-width: ${breakPoint.XS}) {
            font-size: ${fontSize.XS};
            line-height: 1.4;
          }
        }
      }

      &__image-content-mobile {
        font-weight: ${fontWeight.NORMAL};
        text-align: left;
        color: ${color.WHITE};
        font-size: ${fontSize.XS};
      }

      &__image-content-1 {
        letter-spacing: 0;
        text-align: left;
        color: ${color.WHITE};
        @media screen and (max-width: ${breakPoint.SM}) {
          display: none;
        }
      }
    }
  }

    &__bottom {
      text-align: center;
      padding-top: 1.875em;
      padding-bottom: 1.875em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.405) 28.68%,
        rgba(255, 255, 255, 0.405) 74.38%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &__bottom-title {
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0;
      text-align: center;
      color: ${theme.colors.YELLOW};
    }
  }


    .text-gradient {
      background: linear-gradient(
        to right,
        ${theme.colors.YELLOW} 0%,
        ${theme.colors.ORANGE_LIGHT} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media screen and (max-width: ${theme.breakPoints.MD}) {
    .container-second-mobile1 {
      .ant-typography,
      .container-second__title-2,
      .container-second__title-3,
      .container-second__title-4 {
        text-align: center;
      }
    }

    .container-second {
      &__title-2 {
        font-size: ${theme.fontSizes.XL3};
        font-weight: ${theme.fontWeights.EXTRA_BOLD};
        line-height: ${theme.fontSizes.XL5};
      }

      &__title-3 {
        font-size: ${theme.fontSizes.XL3};
        font-weight: ${theme.fontWeights.EXTRA_BOLD};
        line-height: ${theme.fontSizes.XL4};
        width: 100%;
      }

      &__title-2,
      &__title-3,
      &__title-4 {
        text-align: center;
      }
    }

    .container-third {
      padding: 2.5em 0 2.5em var(--paddingMD);

      img {
        object-fit: cover;
      }

      .ant-typography {
        margin-bottom: 0.5em;
        text-align: center;
      }

      &__button {
        ${flex('center', 'center')};
        margin-bottom: 2.5em;
      }

      &__title-2 {
        font-size: ${theme.fontSizes.XL4};
        font-weight: ${theme.fontWeights.EXTRA_BOLD};
        line-height: 2.8rem;
        letter-spacing: 0;
        text-align: center;
      }

      &__row-1 {
        padding-right: var(--paddingMD);
      }
    }

    .container-fourth {
      padding: 2.5em 0 2.5em var(--paddingMD);

      &__title-2 {
        font-size: ${theme.fontSizes.XL3};
        font-weight: ${theme.fontWeights.EXTRA_BOLD};
        line-height: ${theme.fontSizes.XL4};
        letter-spacing: 0;
        text-align: center;
        margin-top: 0.5rem;
      }

      &__title-3 {
        margin-bottom: 2.5em;
      }

      .swiper-scrollbar {
        display: none !important;
      }
    }

    .container-five {
      padding: 2.5em var(--paddingMD) 2.5em var(--paddingMD);

      &__image {
        margin-top: 2.5em;
      }
    }

    .container-six {
      padding: 2.5em var(--paddingMD);

      &__image-1 {
        margin-top: 2.5em;
        position: relative;
      }

      &__sub-title {
        margin-top: 1em;
      }

      .swiper-scrollbar {
        display: none !important;
      }
    }

    .container-seven {
      padding: 2.5rem 0 !important;
    }

    .container-eight {
      &__title {
        font-size: ${theme.fontSizes.XL3};
      }

      &__bottom-sub-title {
        font-size: ${theme.fontSizes.L} !important;
      }
    }

    .container {
      &__image-content {
        font-size: ${theme.fontSizes.L};
      }

      &__image-content-1 {
        display: none;
      }

      &__image-content-3 {
        font-size: ${theme.fontSizes.XS};
        font-weight: ${theme.fontWeights.EXTRA_BOLD};
        line-height: 1.25rem;
        letter-spacing: 0;
        text-align: left;
      }

      &__image-title-1 {
        font-size: ${theme.fontSizes.XXXS};
        color: ${theme.colors.YELLOW};
        font-weight: ${theme.fontWeights.SEMI_BOLD};
        letter-spacing: 0;
        text-align: left;
      }
    }
  }

  @media screen and (max-width: ${breakPoint.XS}) {
    .container-second {
      &__title-2,
      &__title-3,
      &__title-4 {
        text-align: left;
      }
    }
  }
`;
export const StyleTitle = styled(Title)`
  font-weight: ${theme.fontWeights.NORMAL} !important;
`;

export const StyledFooterCardTitle = styled.h1`
  font-size: ${theme.fontSizes.XL6};
  line-height: ${theme.fontSizes.XL8};
  font-weight: ${theme.fontWeights.EXTRA_BOLD};
  color: ${theme.colors.WHITE};
`;
