import { breakPoint, color, fontSize, fontWeight } from '@/styles';
import styled from 'styled-components';

interface CardImageProps {
  width: string | number | undefined;
}

export const StyledCardImage = styled.div<CardImageProps>`
  width: ${(props) => (typeof props?.width === 'number' ? `${props?.width}px` : props?.width)};
  border-radius: 1em;
  overflow: hidden;

  @media screen and (max-width: ${breakPoint.SM}) {
    border-radius: 0.5em;
  }

  .background {
    position: relative;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      max-height: 100%;
      transition: transform 0.3s ease-in-out;
      min-height: 10.5rem;
    }

    &:hover {
      img {
        transform: scale(1.07);
      }
      .title {
        color: ${color.YELLOW};
      }
    }

    .title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .card-content-lg {
      padding: 1.5em;
      position: absolute;
      bottom: 0;
      font-size: ${fontSize.XL};
      font-weight: ${fontWeight.EXTRA_BOLD};
      color: ${color.WHITE};

      @media screen and (max-width: ${breakPoint.SM}) {
        padding: 1rem;
      }
      &__subTitle {
        font-size: ${fontSize.XS};
        color: ${color.YELLOW};
        font-weight: ${fontWeight.SEMI_BOLD};
      }
      &__title {
        margin: 0;
        @media screen and (max-width: ${breakPoint.SM}) {
          font-size: ${fontSize.L};
        }
      }
      &__description {
        font-size: ${fontSize.S};
        color: ${color.WHITE};
        font-weight: ${fontWeight.NORMAL};
        @media screen and (max-width: ${breakPoint.SM}) {
          display: none;
        }
      }
    }
    .card-content-sm {
      padding: 1.25rem;
      position: absolute;
      bottom: 0;
      font-size: ${fontSize.XL};
      font-weight: ${fontWeight.EXTRA_BOLD};
      color: ${color.WHITE};
      max-height: 10.5rem;
      @media screen and (max-width: ${breakPoint.SM}) {
        padding: 1rem;
      }
      &__subTitle {
        font-size: ${fontSize.XS};
        color: ${color.YELLOW};
        font-weight: ${fontWeight.SEMI_BOLD};
      }
      &__title {
        font-weight: ${fontWeight.EXTRA_BOLD};
        font-size: ${fontSize.M};
      }
    }
  }
`;
