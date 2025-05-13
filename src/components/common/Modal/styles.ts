import { Modal } from 'antd';
import styled, { css } from 'styled-components';
import { ModalProps } from './Modal';
import { breakPoint, fontSize, theme } from '@/styles';

const { colors } = theme;
const StyledModal = styled(Modal)<ModalProps>`
  position: relative;

  .icon-close {
    position: absolute;
    right: 24px;
    top: 20px;
    z-index: 1;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  ${(props) => {
    switch (props.type) {
      case 'confirm':
        return css`
          .ant-modal-content {
            margin: 0 auto;
            max-width: 512px;
            width: 100%;
            border-radius: 5px !important;
            text-align: center;
          }

          .modal-confirm__icon {
            display: flex;
            border-color: #c9dae1;

            .icon {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
              width: 88px;
              height: 88px;
              /* border: 4px solid #c9dae1; */
              border-radius: 50%;
              /* color: #87adbd; */
              font-family: inherit;
              font-size: 48px;
              line-height: 5em;
              cursor: default;
              animation: rotateIcon 0.8s;
            }
          }

          .modal-confirm__title {
            margin-top: 10px !important;
          }

          @keyframes rotateIcon {
            0% {
              transform: rotateY(-360deg);
            }

            100% {
              transform: rotateY(0);
            }
          }
        `;

      default:
        return css`
          &.ant-modal {
            position: static;
            padding: 40px;
            max-width: ${props.width ? props.width : '1000px'} !important;
            width: ${props.width ? props.width : '100%'} !important;

            @media screen and (max-width: ${breakPoint.SM}) {
              padding: 15px;
              margin: -8px 0;
            }

            @media screen and (max-width: ${breakPoint.XS}) {
              padding: 0;
            }

            .modal-confirm__title {
              font-size: ${fontSize.XL3};
            }

            .ant-modal-content {
              position: relative;
              padding: 24px;
              border-radius: 16px;
              /* overflow: hidden; */

              @media screen and (max-width: ${breakPoint.SM}) {
                /* top: -8px; */
                bottom: -8px;
                /* border-radius: 0; */
              }

              @media screen and (max-width: ${breakPoint.XS}) {
                border-radius: 0;
              }
            }

            .ant-modal-header,
            .ant-modal-body,
            .ant-modal-footer {
              padding: 0;
              position: unset;
            }

            .ant-modal-header {
              display: none;
            }

            .ant-modal-body {
              .ant-typography {
                margin: 0;
              }
            }

            .ant-modal-footer {
              display: flex;
              border-top: none;
            }

            .ant-modal-close {
              display: none !important;
              position: fixed;
              top: 40px;
              right: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              /* background: ${colors.GRAY_LIGHT}; */
              color: white;
              transform: translate(50%, -50%);
              transition: all 300ms ease-in-out;

              &:hover {
                opacity: 0.9;

                @media screen and (max-width: ${breakPoint.SM}) {
                  background-color: transparent;
                }
              }

              .ant-modal-close-x {
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                  width: 20px;
                  height: 20px;
                  fill: black;

                  path {
                    stroke: black;
                  }
                }
              }

              @media screen and (max-width: ${breakPoint.SM}) {
                top: 16px;
                right: 16px;
                background-color: transparent;
                color: #959595;
              }
            }
          }
        `;
    }
  }}
`;

export default StyledModal;
