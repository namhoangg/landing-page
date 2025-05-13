import styled from 'styled-components';
import { color, displayFlex, fontSize, fontWeight, theme, zIndex } from '@/styles';
import { Button, GetImage, Title } from '..';

const { fontSizes, colors, fontWeights, breakPoints } = theme;

export const StyledCard = styled.div`
  flex-basis: calc(33.33% - 2em);
  overflow: hidden;

  .ant-typography {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title {
    transition: all 0.4s ease-in-out;
  }

  .card_desc {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${color.GRAY_DARK};
  }

  &.row {
    ${displayFlex};
    flex-direction: row;
  }
  &.col {
    ${displayFlex};
    flex-direction: column;
  }
  .row-title {
    width: 50% !important;
    padding-left: 40px;
    display: block;
  }

  &.row,
  &.col {
    &:hover {
      .row-img {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  @media screen and (max-width: ${breakPoints.XS}) {
    flex-direction: column !important;
    flex-basis: 100%;
  }
`;

export const StyledTitle = styled(Title)`
  margin: 0 0 0.5em 0 !important;
  transition: transform 0.4s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;
  white-space: normal !important;

  &:hover {
    color: ${theme.colors.YELLOW};
  }

  .title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const StyledImageContainer = styled.div`
  &.row-img {
    width: 50% !important;
  }
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 1.75 / 1;
  object-fit: cover;

  &:hover + .col-title ${StyledTitle} {
    color: ${theme.colors.YELLOW};
  }

  &:hover + .row-title ${StyledTitle} {
    color: ${theme.colors.YELLOW};
  }
`;

export const StyledImage = styled(GetImage)`
  position: relative;
  display: block !important;
  width: 100%;
  height: 100% !important;
  transition: transform 0.4s ease-in-out;
  pointer-events: auto;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:hover ~ #title {
    color: red;
  }
`;

export const StyledStatus = styled.span<{ color: string }>`
  position: absolute;
  z-index: ${zIndex.NORMAL};
  margin: 1em;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => props.color || `${color.WHITE}`};
  padding: 0.375em 0.75em;
  font-size: ${fontSize.XS};
  color: ${color.WHITE};
  font-weight: ${fontWeight.MEDIUM};
`;

export const StyledSubTitle = styled.h1`
  margin: 0.5em 0 !important;
  font-size: ${fontSizes.XS} !important;
  color: ${colors.YELLOW};
  font-weight: ${fontWeights.SEMI_BOLD};
`;

export const StyledTopic = styled.div`
  margin-top: 0.75em;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  pointer-events: visible;
`;

export const StyleButton = styled(Button)`
  &.ant-btn {
    background-color: white;
    font-size: ${fontSize.XS};
    padding: 0.25em 0.5em;
    border: 1px solid ${color.GRAY_LIGHT};
    color: ${color.GRAY_DARK};
    border-radius: 5px;
    font-weight: ${fontWeight.NORMAL};
    display: inline;
    background-color: ${(props) => props.color || `${color.BLACK_WHITE_LIGHT}`};
    height: auto;
    margin-right: 0.625em;
    margin-bottom: 0.625rem;
  }
`;
