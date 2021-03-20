import React from 'react';
import { ModalCard, Overlay } from './styles';

interface ModalProps {
  isShowing: boolean
  closeModal: () => void
  children: React.ReactNode,
  className?: string
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    closeModal, children, isShowing, className,
  } = props;

  return isShowing
    ? (
      <>
        <Overlay onClick={closeModal} />
        <ModalCard
          onClick={(event: React.MouseEvent) => event.stopPropagation()}
          className={className}
        >
          {children}
        </ModalCard>
      </>
    )
    : <> </>;
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
