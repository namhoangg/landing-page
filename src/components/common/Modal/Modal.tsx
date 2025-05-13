import { ModalProps as AntdModalProps, Typography } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import { CloseIcon } from '../Icons';
import StyledModal from './styles';

export interface ModalProps extends AntdModalProps {
  type?: 'default' | 'confirm';
  confirmIcon?: ReactNode;
  width?: string | number;
  maskStyle?: CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  type = 'default',
  maskStyle = { backgroundColor: 'rgba(0 0 0, 0.75)' },
  ...props
}: ModalProps) => {
  return (
    <StyledModal
      {...props}
      type={type}
      title={null}
      footer={null}
      width={props.width}
      maskStyle={maskStyle}
      closable={type !== 'confirm'}
      closeIcon={<CloseIcon />}
      transitionName=''
      centered
    >
      <i
        className='icon-close'
        onClick={props.onCancel}
      >
        <CloseIcon />
      </i>

      {props.confirmIcon && type === 'confirm' && (
        <>
          <div className='modal-confirm__icon'>
            <div className='icon'>{props.confirmIcon}</div>
          </div>
          <Typography.Title
            level={4}
            className='modal-confirm__title'
          >
            {props.title}
          </Typography.Title>
        </>
      )}
      {type === 'default' ? <Typography.Title>{props.title}</Typography.Title> : null}
      {props.children}
    </StyledModal>
  );
};

export default Modal;
