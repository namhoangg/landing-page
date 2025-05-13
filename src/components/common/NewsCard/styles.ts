import styled from 'styled-components';
import { breakPoint, color, fontSize, fontWeight } from '@/styles';

export const StyledNewCard = styled.div`
  p {
    margin-bottom: 0;
  }

  &.news {
    display: flex;
    cursor: pointer;
    padding: 0.938em 0 0.938em;

    &:hover {
      .news__img {
        img {
          transform: scale(1.07);
        }
      }

      h5 {
        color: ${color.YELLOW};
      }
    }

    &.news--row {
      flex-direction: row;
      align-items: center;
      gap: 2.5rem;

      @media screen and (max-width: ${breakPoint.MD}) {
        flex-direction: column;
        gap: 1rem;
      }

      .news__img {
        @media screen and (max-width: ${breakPoint.SM}) {
          height: 13.625rem;
        }
        height: 21.125rem;
        img {
          height: 21.125rem;
          object-fit: cover;

          @media screen and (max-width: ${breakPoint.SM}) {
            height: 13.625rem;
          }
        }
      }

      .news__info {
        padding: 55px 0;

        @media screen and (max-width: ${breakPoint.MD}) {
          padding: 0;
        }

        .news__type {
          font-size: ${fontSize.S};

          @media screen and (max-width: ${breakPoint.SM}) {
            padding: 0;
          }
        }

        .news__description {
          margin-top: 1rem;

          @media screen and (max-width: ${breakPoint.SM}) {
            margin-top: 0.625rem;
          }
        }
      }
    }

    &.news--column {
      flex-direction: column;
      gap: 0.75rem;

      .news__info {
        .news__type {
          line-height: 130%;
        }
      }
    }

    &.news--lg {
      .news__info {
        .news__type {
          font-size: ${fontSize.S};

          @media screen and (max-width: ${breakPoint.SM}) {
            font-size: ${fontSize.XS};
            line-height: 121%;
          }
        }

        h5 {
          margin-top: 0.75rem;
          font-size: ${fontSize.XL3};

          @media screen and (max-width: ${breakPoint.SM}) {
            font-size: ${fontSize.L};
          }
        }

        .news__description {
          font-size: ${fontSize.S};

          @media screen and (max-width: ${breakPoint.SM}) {
            font-size: ${fontSize.XS};
          }
        }
      }
    }

    &.news--sm {
      .news__img {
        min-height: 13.625rem;
        max-height: 13.625rem;

        img {
          max-height: 13.625rem;
          object-fit: cover;
          min-height: 13.625rem;
        }
      }

      .news__info {
        .news__type {
          font-size: ${fontSize.XS};

          @media screen and (max-width: ${breakPoint.SM}) {
            font-size: ${fontSize.XXS};
            line-height: 121%;
          }
        }

        h5 {
          font-size: ${fontSize.M};

          @media screen and (max-width: ${breakPoint.SM}) {
            font-size: ${fontSize.S} !important;
          }
        }
      }
    }

    .news__img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      object-fit: contain;
      overflow: hidden;
      flex: 1;

      @media screen and (min-width: calc(${breakPoint.SM} + 1px)) and (max-width: 1279px) {
        max-height: 21.875rem;
        height: 100%;
        object-fit: cover;
      }

      @media screen and (max-width: ${breakPoint.SM}) {
        max-height: 12.125rem;
      }

      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        transition: all 0.3s ease-in;
      }
    }

    .news__info {
      flex: 1;

      .news__type {
        font-weight: ${fontWeight.SEMI_BOLD};
        line-height: 140%;
      }

      h5 {
        margin-top: 0.375rem;
        margin-bottom: 0;
        font-style: normal;
        font-weight: ${fontWeight.SEMI_BOLD};
        line-height: 140%;
        transition: all 0.3s ease-in;
        text-transform: uppercase;
        word-break: break-word;
        @media screen and (max-width: ${breakPoint.SM}) {
          font-size: ${fontSize.S};
          line-height: 1.4;
          letter-spacing: 0;
        }
      }

      .news__description {
        margin-top: 0.375rem;
        font-size: ${fontSize.S};
        font-style: normal;
        font-weight: ${fontWeight.NORMAL};
        line-height: 140%;
        word-break: break-word;

        @media screen and (max-width: ${breakPoint.SM}) {
          margin-top: 0.375rem;
          font-size: ${fontSize.XS};
          line-height: 1.4;
          letter-spacing: 0;
        }
      }
    }
  }

  .color--primary-yellow {
    color: ${color.YELLOW};
    font-size: ${fontSize.MIN};
    font-family: Inter, sans-serif;
    font-weight: ${fontWeight.SEMI_BOLD};
  }

  .color--primary-black {
    color: ${color.BLACK};
    font-size: ${fontSize.L};
    font-family: Inter, sans-serif;
    font-weight: ${fontWeight.SEMI_BOLD};
  }

  .color--primary-white {
    color: ${color.WHITE};
  }

  .color--black-white {
    color: ${color.BLACK_WHITE};
  }

  .color--gray-dark {
    color: ${color.GRAY_DARK};
    font-size: ${fontSize.S};
    font-family: Inter, sans-serif;
    font-weight: ${fontWeight.NORMAL};
  }

  .color--blue {
    color: ${color.BLUE};
  }
`;
