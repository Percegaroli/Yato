import React from 'react';
import { ModalCard, Overlay } from './styles';

interface ModalProps {
  isShowing: boolean
  closeModal: () => void
  children: React.ReactNode,
  modalClassName?: string
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    closeModal, children, isShowing, modalClassName,
  } = props;

  return isShowing
    ? (
      <>
        <Overlay onClick={closeModal} />
        <ModalCard
          onClick={(event: React.MouseEvent) => event.stopPropagation()}
          className={modalClassName}
        >
          {children}
        </ModalCard>
      </>
    )
    : <> </>;
};

Modal.defaultProps = {
  modalClassName: '',
};

export default Modal;
