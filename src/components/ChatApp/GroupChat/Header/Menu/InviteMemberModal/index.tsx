import React from 'react';
import Modal from '../../../../../UI/Modal';
import {
  Titulo, Legenda, LinkContainer, Container,
} from './styles';

interface ModalProps {
  isShowing: boolean,
  closeModal: () => void
}

const InviteMemberModal: React.FC<ModalProps> = (props: ModalProps) => {
  const { isShowing, closeModal } = props;
  return (
    <Modal
      isShowing={isShowing}
      closeModal={closeModal}
    >
      <Container>
        <Titulo>
          Convidar um novo membro
        </Titulo>
        <Legenda>
          Envie este link para a pessoa:
        </Legenda>
        <LinkContainer>
          <Legenda>
            Join.me/KH415D6A4
          </Legenda>
        </LinkContainer>
      </Container>
    </Modal>
  );
};

export default InviteMemberModal;
